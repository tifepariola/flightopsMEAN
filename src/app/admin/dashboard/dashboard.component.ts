import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs/Subscription';
import * as io from 'socket.io-client';
import { AdminService } from '../admin.service';
import * as $ from 'jquery';
import * as moment from 'moment';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  private userSubscription: Subscription;
  public user: any;
  schedule: any;
  id: any;
  events: any = [];
  crew_id: any;
  calendarPlugins: any;
  calendarHeaders: any;
  constructor(
    private authService: AuthService,
    private adminService: AdminService,
    private router: Router
  ) {
    if (!this.authService.loggedIn()) { this.navigate('/auth/login'); }
  }

  public ngOnInit() {
    this.calendarPlugins = [dayGridPlugin, timeGridPlugin, listPlugin];
    this.calendarHeaders = {
      right: 'prev,title,next',
      center: '',
      left: 'dayGridMonth,dayGridWeek'
    };
    // init this.user on startup
    this.authService.me().subscribe(user => {
      this.user = user.user;
      this.id = this.user._id;
      console.log('user ', this.user);
      if (this.user.role === 'admin') {
        this.getAdminSchedule();
      } else {
        this.adminService.getCrewByUser(this.id).subscribe(data => {
          console.log(data.data);
          if (data.data[0]) {
            this.crew_id = data.data[0]._id;
            console.log('crew_id ', this.crew_id);
            if (this.user.occupation === 'PIC') { this.getPICSchedule(); }
            if (this.user.occupation === 'OPS') { this.getOPSSchedule(); }
            if (this.user.occupation === 'FO') { this.getFOSchedule(); }
          }
        });
      }
    });

    // update this.user after login/register/logout
    this.userSubscription = this.authService.$userSource.subscribe((user) => {
      this.user = user;
    });
  }
  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
  navigate(link): void {
    this.router.navigate([link]);
  }



  getAdminSchedule(): void {
    this.adminService.getAdminSchedule().subscribe(data => {
      this.schedule = data.data;
      this.schedule.forEach(element => {
        this.addEvent(element.departure_airport + ' ->' + element.arrival_airport, element.departuretime, element.arrivaltime);
      });
      console.log('schedule ', this.schedule);
    });
  }
  getFOSchedule(): void {
    this.adminService.getFOSchedule(this.crew_id).subscribe(data => {
      this.schedule = data.data;
      this.schedule.forEach(element => {
        this.addEvent(element.departure_airport + ' ->' + element.arrival_airport, element.departuretime, element.arrivaltime);
      });
      console.log('schedule ', this.schedule);
    });
  }
  getOPSSchedule(): void {
    this.adminService.getOPSSchedule(this.crew_id).subscribe(data => {
      this.schedule = data.data;
      this.schedule.forEach(element => {
        this.addEvent(element.departure_airport + ' -> ' + element.arrival_airport, element.departuretime, element.arrivaltime);
      });
      console.log('schedule ', this.schedule);
    });
  }
  getPICSchedule(): void {
    this.adminService.getPICSchedule(this.crew_id).subscribe(data => {
      this.schedule = data.data;
      this.schedule.forEach(element => {
        this.addEvent(element.departure_airport + ' -> ' + element.arrival_airport, element.departuretime, element.arrivaltime);
      });
      console.log('schedule ', this.schedule);
    });
  }
  addEvent(title, start, end): void {
    this.events.push({
      title: title + ' (' + new Date(start * 1000) + ' - ' + new Date(end * 1000) + ')',
      start: new Date(start * 1000),
      end: new Date(end * 1000)
    });
  }


  logout() {
    this.authService.signOut();
    this.navigate('/auth/login');
  }


}
