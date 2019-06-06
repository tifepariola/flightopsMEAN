import { Component, OnInit, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';

import * as $ from 'jquery';

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
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss']
})
export class CrewComponent implements OnInit {
  id: string;
  crew: any;
  licences: any;
  expiry: string;
  licence: string;
  schedule: any;
  currentTime: number;
  doRun: boolean;
  status: string;
  events: any = [];
  pastMove: any = [];
  upMove: any = [];
  calendarPlugins: any[];
  calendarHeaders: { right: string; center: string; left: string; };

  constructor(private adminService: AdminService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.doRun = true;
    this.currentTime = new Date().getTime();
    this.calendarPlugins = [dayGridPlugin, timeGridPlugin, listPlugin];
    this.calendarHeaders = {
      right: 'prev,title,next',
      center: '',
      left: 'dayGridMonth,dayGridWeek'
    };
    this.status = 'On Ground';
    console.log('click')
    $('#btn-add-licence').on('click', function () {
      console.log('click')
      $('#add-licence').addClass('is-active');
    })
    $('.delete').on('click', function () {
      $('#add-licence').removeClass('is-active');
    })
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)
    this.getCrew();
    this.getLicences();
  }


  showAddLicence(): void {
    $('#add-licence').addClass('is-active');
  }
  hideAddLicence(): void {
    $('#add-licence').removeClass('is-active');
  }
  getCrew(): void {
    this.adminService.getCrew(this.id).subscribe(data => {
      this.crew = data.data;
      if (this.crew.occupation === 'OPS') { this.getOPSSchedule() }
      if (this.crew.occupation === 'PIC') { this.getPICSchedule() }
      if (this.crew.occupation === 'FO') { this.getFOSchedule() }
      console.log('crew ', this.crew)
    })
  }
  getLicences(): void {
    this.adminService.getLicences(this.id).subscribe(data => {
      this.licences = data.data;
      console.log('licences ', this.licences)
    })
  }
  getFOSchedule(): void {
    this.adminService.getFOSchedule(this.id).subscribe(data => {
      this.schedule = data.data;
      this.schedule.forEach(element => {
        if (this.status === 'On Ground') {
          if (element.departuretime * 1000 < this.currentTime && element.arrivaltime > this.currentTime) {
            this.status = 'In Progress';
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
        this.addEvent(element.departure_airport + ' ->' + element.arrival_airport, element.departuretime, element.arrivaltime);
      });
      console.log('schedule ', this.schedule)
    })
  }
  getOPSSchedule(): void {
    this.adminService.getOPSSchedule(this.id).subscribe(data => {
      this.schedule = data.data;
      this.schedule.forEach(element => {
        if (this.status === 'On Ground') {
          if (element.departuretime * 1000 < this.currentTime && element.arrivaltime > this.currentTime) {
            this.status = 'In Progress';
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
      console.log('schedule ', this.schedule)
    })
  }
  getPICSchedule(): void {
    this.adminService.getPICSchedule(this.id).subscribe(data => {
      this.schedule = data.data;
      this.schedule.forEach(element => {
        if (this.status === 'On Ground') {
          if (element.departuretime * 1000 < this.currentTime && element.arrivaltime > this.currentTime) {
            this.status = 'In Progress';
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
      console.log('schedule ', this.schedule)
    })
  }
  addLicence(): void {
    console.log('add start')
    $('#addBtn').addClass('is-loading');
    if (this.doRun === true) {
      this.adminService.addLicence(this.id, this.licence, this.expiry)
        .subscribe(data => {
          console.log('Licence Added ', data)
          this.getLicences();
          $('form').trigger('reset');
          $('#addBtn').removeClass('is-loading');
          // $('#add-licence').removeClass('is-active');
          this.doRun = false
        },
          error => {
            $('#addBtn').removeClass('is-loading');
            console.log(error)
          })
    }
  }
  addEvent(title, start, end): void {
    this.events.push({
      title: title + ' (' + new Date(start * 1000) + ' - ' + new Date(end * 1000) + ')',
      start: new Date(start * 1000),
      end: new Date(end * 1000),
      color: colors.red,
      draggable: false,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    });
  }
}
