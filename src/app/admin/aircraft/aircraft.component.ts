import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { CalendarEventTimesChangedEvent, CalendarEvent, CalendarView, CalendarEventAction } from 'angular-calendar';
import { isSameDay, isSameMonth, subDays, startOfDay, addDays, endOfMonth, addHours, endOfDay } from 'date-fns';
import { Subject } from 'rxjs';
import { AdminService } from '../admin.service';
import { ActivatedRoute } from '@angular/router';
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
  selector: 'app-aircraft',
  templateUrl: './aircraft.component.html',
  styleUrls: ['./aircraft.component.scss']
})
export class AircraftComponent implements OnInit {
  aircraft: any;
  id: string;
  aircraftLocation: any;
  aircraftLat: any;
  aircraftLon: any;
  calendarPlugins: any;
  calendarHeaders: any;
  events: any = [];
  aircraftSchedule: any;
  currentTime: number;
  status: string;
  pastMove: any = [];
  upMove: any = [];

  constructor(private adminService: AdminService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getAircraft();
    this.status = "On Ground";
    this.currentTime = new Date().getTime();
    this.calendarPlugins = [dayGridPlugin, timeGridPlugin, listPlugin];
    this.calendarHeaders = {
      right: 'prev,title,next',
      center: '',
      left: 'dayGridMonth,dayGridWeek'
    };
    $('#tabs li').on('click', function () {
      var tab = $(this).data('tab');

      $('#tabs li').removeClass('is-active');
      $(this).addClass('is-active');

      $('#tab-content div').removeClass('is-active');
      $('div[data-content="' + tab + '"]').addClass('is-active');
    });
  }
  getAircraft(): void {
    this.adminService.getAircraft(this.id).subscribe(data => {
      this.aircraft = data.data;
      this.getLocation();
      this.getAircraftSchedule();
      console.log('aircraft ', this.aircraft);
    });
  }
  getAircraftSchedule(): void {
    this.adminService.getAircraftSchedule(this.aircraft.aircraftId).subscribe(data => {
      this.aircraftSchedule = data.data;
      this.aircraftSchedule.forEach(element => {
        if (this.status === "On Ground") {
          if (element.departuretime * 1000 < this.currentTime && element.arrivaltime > this.currentTime) {
            this.status = "In Progress";
          }
        }
        if (element.departuretime * 1000 < this.currentTime) {
          if (this.pastMove.length < 4) {
            this.pastMove.push(element);
          }
        } else {
          if (this.upMove.length < 4) {
            this.upMove.push(element);
          }
        }
        this.addEvent(element.departure_airport + ' -> ' + element.arrival_airport, element.departuretime, element.arrivaltime);
      });
      console.log('aircraft route', this.aircraftSchedule);
    });
  }
  getLocation(): void {
    this.adminService.getLocation(this.aircraft.icao24).subscribe(data => {
      // this.aircraft = data.data;
      this.aircraftLocation = data.data.path[data.data.path.length - 1];
      this.aircraftLat = this.aircraftLocation[1];
      this.aircraftLon = this.aircraftLocation[2];
      console.log('location ', this.aircraftLat);
    });
  }


  addEvent(title, start, end): void {
    this.events.push({
      title: title + ' (' + new Date(start * 1000) + ' - ' + new Date(end * 1000) + ')',
      start: new Date(start * 1000),
      end: new Date(end * 1000),
    });
  }
}
