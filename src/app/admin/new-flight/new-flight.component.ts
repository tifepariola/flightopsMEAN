import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import * as $ from 'jquery';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';
import { interval } from 'rxjs';
import { startWith, switchMap, single } from 'rxjs/operators';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-new-flight',
  templateUrl: './new-flight.component.html',
  styleUrls: ['./new-flight.component.scss']
})
export class NewFlightComponent implements OnInit {
  handlers: any;
  departure_time: any;
  routeId: any;
  routeDet = {
    arrivaltime: 0,
    departuretime: 0,
    fuel: 0,
    distance: 0,
    fplan: {},
  };
  exampleOptions: FlatpickrOptions = {
    enableTime: true,
    defaultDate: this.departure_time,
    mode: 'single'
  };
  result: any;
  aircraft: any;
  reference_id: any;
  ops_crew: any;
  departure_airport: any;
  cargo: string;
  pax: string;
  type: string;
  dangerous: string;
  handler: any;
  arrival_airport: any;
  ops_crews: any;
  currentLoc: any;
  fromLayOver: number;
  flight_id: any;
  toLayOver: number;
  baseLoc: any;
  arrival_time: any;
  pic_crew: any;
  fo_crew: any;
  ops_crew_name: string;
  pic_crew_name: string;
  fo_crew_name: string;
  positionFrom: any;
  positionTo: any;
  ops_crew_email: string;
  pic_crew_email: any;
  fo_crew_email: any;
  crewTemplate: any;
  handlerTemplate: any;
  handler_email: string;
  fromHandler: any;
  toHandler: any;
  positionFromDep: any;
  positionFromArr: any;
  positionFromDepT: any;
  positionFromArrT: any;
  positionToDep: any;
  positionToArr: any;
  positionToDepT: number;
  positionToArrT: number;
  LiveDep: any;
  LiveArr: any;
  LiveDepT: number;
  flightRoute: any;
  poll: any;
  airportss: any;
  airport: never[];
  dptAirportSearch: any;
  search: any;
  lastFlight: any;
  rotationEnd: any;
  rotationStart: any;
  rotationLength: any;
  splitA: any;
  splitB: number;
  nextFlight: any;
  overlapFlight: any;

  constructor(private adminService: AdminService, private route: ActivatedRoute, private renderer: Renderer2,
    @Inject(DOCUMENT) private document: any, ) { }
  aircrafts: {};
  airports: [];
  sale: {};
  id: string;
  ngOnInit() {
    this.departure_airport = {};
    this.departure_airport.name = '';
    this.arrival_airport = {};
    this.arrival_airport.name = '';
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    $('.delete').on('click', function () {
      $('#suggested').removeClass('is-active');
    });

    this.getAircrafts();
    // this.sendMail();
    if (this.id !== 'new') {
      this.getSale();
    } else {
      this.sale = 'new';
      $('.ng2-flatpickr-input').addClass('input');

    }
    $('#tabs li').on('click', function () {
      const tab = $(this).data('option');

      $('#tabs li').removeClass('is-active');
      $(this).addClass('is-active');

      $('#tab-content div').removeClass('is-active');
      $('div[data-content="' + tab + '"]').addClass('is-active');
    });
    this.getCrewByOccupation();
  }
  getAircrafts(): void {
    this.adminService.getAircrafts().subscribe(data => {
      this.aircrafts = data.data;
      console.log('aircrafts ', this.aircrafts);
    });
  }
  distance(lat1, lon1, lat2, lon2, unit) {
    if ((lat1 === lat2) && (lon1 === lon2)) {
      return 0;
    } else {
      const radlat1 = Math.PI * lat1 / 180;
      const radlat2 = Math.PI * lat2 / 180;
      const theta = lon1 - lon2;
      const radtheta = Math.PI * theta / 180;
      let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = dist * 180 / Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit === 'K') { dist = dist * 1.609344; }
      if (unit === 'N') { dist = dist * 0.8684; }
      return dist;
    }
  }
  getAirports(keyword, type): void {
    if (keyword.length > 2) {
      this.airports = [];
      $('#' + type).addClass('is-active');
      this.adminService.findAirports(keyword).subscribe(data => {
        console.log('search ', data.data);
        this.airports = data.data;
      });
    }
  }
  hideSearch(): void {
    $('.dropdown').removeClass('is-active');

  }
  getSale(): void {
    this.adminService.getSale(this.id).subscribe(data => {
      this.sale = data.data;
      this.reference_id = data.data.reference_id;
      this.departure_time = new Date(data.data.departure);
      this.departure_airport = data.data.origin_airport;
      this.arrival_airport = data.data.destination_airport;
      console.log('sale ', this.departure_time);
      $('ng2-flatpickr').addClass('input');
    });
  }
  lastLiveFlight(date): void {
    this.adminService.lastLiveFlight(this.aircraft.aircraftId, date).subscribe(data => {
      this.lastFlight = data.data[0];
      console.log('last flight', this.lastFlight);
      this.handleLFChange('arrival');
    });
  }
  nextLiveFlight(date): void {
    this.adminService.nextLiveFlight(this.aircraft.aircraftId, date).subscribe(data => {
      this.nextFlight = data.data[0];
      console.log('next flight', this.nextFlight);
      this.handleNFChange('arrival');
    });
  }
  handleLFChange(val) {
    if (val === 'arrival') {
      this.currentLoc = {};
      this.currentLoc.icao = this.lastFlight.arrival_airport;
      this.currentLoc.name = this.lastFlight.arrival_airport;
      this.fromHandler = {};
      this.fromHandler._id = this.lastFlight.handler;
      $('#currentLoc').prop('disabled', true);
      $('#fromHandler').prop('disabled', true);

    } else {
      $('#currentLoc').prop('disabled', false);
      $('#fromHandler').prop('disabled', false);
    }
  }
  handleNFChange(val) {
    if (val === 'arrival') {
      this.baseLoc = {};
      this.baseLoc.icao = this.nextFlight.arrival_airport;
      this.baseLoc.name = this.nextFlight.arrival_airport;
      this.toHandler = {};
      this.toHandler._id = this.nextFlight.handler;
      $('#baseLoc').prop('disabled', true);
      $('#toHandler').prop('disabled', true);

    } else {
      $('#baseLoc').prop('disabled', false);
      $('#toHandler').prop('disabled', false);
    }
  }
  createMail(): void {
    console.log('sending mail');
    this.sendCrewMail(this.ops_crew.name, 'OPS', this.positionFromDep, this.positionFromArr, this.positionFromDepT);
    this.sendCrewMail(this.ops_crew.name, 'OPS', this.LiveDep, this.LiveArr, this.LiveDepT);
    this.sendCrewMail(this.ops_crew.name, 'OPS', this.positionToDep, this.positionToArr, this.positionToDepT);
    this.sendCrewMail(this.pic_crew.name, 'PIC', this.positionFromDep, this.positionFromArr, this.positionFromDepT);
    this.sendCrewMail(this.pic_crew.name, 'PIC', this.LiveDep, this.LiveArr, this.LiveDepT);
    this.sendCrewMail(this.pic_crew.name, 'PIC', this.positionToDep, this.positionToArr, this.positionToDepT);
    this.sendCrewMail(this.fo_crew.name, 'FO', this.positionFromDep, this.positionFromArr, this.positionFromDepT);
    this.sendCrewMail(this.fo_crew.name, 'FO', this.LiveDep, this.LiveArr, this.LiveDepT);
    this.sendCrewMail(this.fo_crew.name, 'FO', this.positionToDep, this.positionToArr, this.positionToDepT);
  }
  createHandlerMail(): void {
    console.log('sending handler mail');
    this.sendHandlerMail(this.fromHandler.email_primary, this.fromHandler.name, 'Handler', this.positionFromDep,
      this.positionFromArr, this.positionFromDepT);
    this.sendHandlerMail(this.handler.email_primary, this.handler.name, 'Handler', this.LiveDep, this.LiveArr,
      this.LiveDepT);
    this.sendHandlerMail(this.toHandler.email_primary, this.toHandler.name, 'Handler', this.positionToDep,
      this.positionToArr, this.positionToDepT);
  }
  sendCrewMail(name, role, beginning, end, departTime): void {
    this.adminService.getTemplates().subscribe(data => {
      this.crewTemplate = data.data[0];
      this.handlerTemplate = data.data[1];
      const find = ['%crewname%', '%role%', '%flightID%', '%aircraftID%', '%aircraftname%', '%date%', '%time%',
        '%airportdeparture%', '%airportarrival%', '%link%'];
      const replace = [name, role, this.reference_id, this.aircraft.aircraftId, this.aircraft.registration,
        new Date(departTime * 1000).getDate() + '-' + new Date(departTime * 1000).getMonth() + '-' +
        new Date(departTime * 1000).getFullYear(), new Date(departTime * 1000).getHours() + ':' +
        new Date(departTime * 1000).getMinutes() + ':' + new Date(departTime * 1000).getSeconds(),
        beginning, end, this.reference_id];
      this.crewTemplate.subject = this.replaceArray(this.crewTemplate.subject, find, replace);
      this.crewTemplate.message = this.replaceArray(this.crewTemplate.message, find, replace);
      this.adminService.sendMail(this.ops_crew.p_email, this.crewTemplate.subject, this.crewTemplate.message).subscribe(data => {
        console.log('hello ', data);
      });
    });
  }
  sendHandlerMail(email, name, role, beginning, end, departTime): void {
    this.adminService.getTemplates().subscribe(data => {
      this.handlerTemplate = data.data[1];
      const find = ['%handlername%', '%role%', '%flightID%', '%aircraftID%', '%aircraftname%', '%date%',
        '%time%', '%airportdeparture%', '%airportarrival%', '%link%'];
      const replace = [name, role, this.reference_id, this.aircraft.aircraftId, this.aircraft.registration,
        new Date(departTime * 1000).getDate() + '-' + new Date(departTime * 1000).getMonth() + '-' +
        new Date(departTime * 1000).getFullYear(), new Date(departTime * 1000).getHours() + ':' +
        new Date(departTime * 1000).getMinutes() + ':' + new Date(departTime * 1000).getSeconds(), beginning,
        end, this.reference_id];
      this.handlerTemplate.subject = this.replaceArray(this.handlerTemplate.subject, find, replace);
      this.handlerTemplate.message = this.replaceArray(this.handlerTemplate.message, find, replace);
      this.adminService.sendMail('kininteractivesolutions@gmail.com', this.handlerTemplate.subject,
        this.handlerTemplate.message).subscribe(data => {
          console.log('hello ', data);
        });
    });
  }
  replaceArray = function (text, find, replace) {
    let replaceString = text;
    let regex;
    for (let i = 0; i < find.length; i++) {
      regex = new RegExp(find[i], 'g');
      replaceString = replaceString.replace(regex, replace[i]);
    }
    return replaceString;
  };
  getHandler(airport): void {
    this.adminService.getHandler(airport.icao).subscribe(data => {
      this.handlers = data.data;
      console.log('handlers ', this.handlers);
    });
  }
  paxCargo(choice): void {
    if (choice === 'pax') {
      $('#cargo').hide();
      $('#pax').show();
    } else {
      $('#pax').hide();
      $('#cargo').show();
    }
  }
  getCrewByOccupation(): void {
    this.adminService.getCrewByOccupation('OPS').subscribe(data => {
      this.ops_crews = data.data;
      console.log('crews ', this.ops_crews);
    });
  }
  doRoute(): void {
    console.log('DISTANCE ', this.distance(this.departure_airport.latitude, this.departure_airport.longitude,
      this.arrival_airport.latitude, this.arrival_airport.longitude, 'K'));

    $('#addBtn').addClass('is-loading');
    $('#reset').addClass('is-hidden');
    $('#cancel').removeClass('is-hidden');
    const data = {
      aircraftid: this.aircraft.aircraftId,
      departure: this.departure_airport.icao,
      destination: this.arrival_airport.icao,
      departuretime: Date.parse(this.departure_time) / 1000
    };
    this.adminService.route(data).subscribe(data => {
      this.routeId = data.data;
      console.log('response ', this.routeId);
      this.result = this.routeId;
      this.poll = interval(15000)
        .pipe(
          startWith(0),
          switchMap(() => this.adminService.longPoll(data.data))
        )
        .subscribe(res => {
          console.log(res.data);
          for (const el of res.data) {
            if (el.hasOwnProperty('aircraftid')) {
              this.poll.unsubscribe();
              this.adminService.getFplan(this.routeId).subscribe(data => {
                console.log(data);
                this.arrival_time = data.data.arrivaltime;
                this.departure_time = data.data.departuretime;
                this.routeDet.arrivaltime = data.data.arrivaltime;
                this.routeDet.departuretime = data.data.departuretime;
                this.routeDet.fuel = data.data.fuelcalc.reqdfuel;
                this.routeDet.distance = data.data.gcdist;
                this.routeDet.fplan = { ...data.data.fplan };
                console.log('rou', this.routeDet);
                this.result = JSON.stringify(this.routeDet, undefined, 2);
                this.adminService.checkOverlap(this.aircraft.aircraftId, this.routeDet.departuretime,
                  this.routeDet.arrivaltime).subscribe(data => {
                    console.log('overlap ', data);
                    if (data.data.length === 0) {
                      this.getCrew();
                      this.lastLiveFlight(this.routeDet.departuretime);
                      this.nextLiveFlight(this.routeDet.arrivaltime);
                      this.currentLoc = {};
                      this.currentLoc.name = '';
                      this.LiveDep = this.departure_airport.icao;
                      this.LiveArr = this.arrival_airport.icao;
                      this.LiveDepT = this.routeDet.departuretime;
                      this.LiveArr = this.routeDet.arrivaltime;
                      $('#position-from').addClass('is-active');
                    } else {
                      this.overlapFlight = data.data[0];
                      $('#flight-overlap').addClass('is-active');
                    }
                  });
                // $('#addBtn').removeClass('is-loading');

              });
              break;
            }
          }
          this.result = JSON.stringify(res.data, undefined, 2);
        });
    });
  }
  getCrew() {
    this.adminService.getCrewByOccupation('PIC').subscribe(data => {
      console.log('crewPIC', data.data);
      data.data.some(element => {
        // console.log(Date.parse(this.departure_time) / 1000 - element.unavailable)
        const subtract = Date.parse(this.departure_time) / 1000 - element.unavailableTo;
        this.pic_crew = element;
        return subtract >= 0;

      });
      this.adminService.getCrewByOccupation('FO').subscribe(data => {
        console.log('crewFO', data.data);
        data.data.some(element => {
          // console.log(Date.parse(this.departure_time) / 1000 - element.unavailable)
          const subtract = Date.parse(this.departure_time) / 1000 - element.unavailableTo;
          this.fo_crew = element;
          return subtract >= 0;

        });
        this.addRoute('live', this.routeId);
      });
    });
  }
  addRoute(type, routeId) {
    this.adminService.addRoute(this.reference_id,
      routeId,
      this.ops_crew._id,
      this.pic_crew._id,
      this.fo_crew._id,
      this.ops_crew.name,
      this.pic_crew.name,
      this.fo_crew.name,
      this.aircraft.aircraftId,
      this.departure_airport.icao,
      this.arrival_airport.icao,
      this.handler._id,
      this.dangerous,
      this.type,
      this.pax,
      this.cargo, type, this.routeDet.arrivaltime, this.routeDet.departuretime,
      this.routeDet.fuel, this.routeDet.distance, this.routeDet.fplan).subscribe(data => {
        console.log('ROUTE ADDED ', data);
        this.adminService.getBriefing(routeId).subscribe(data => {
          console.log('briefing', data);
        });
      });
  }
  doPositionFrom(): void {
    $('#positionBtn').addClass('is-loading');
    $('#resetFrom').addClass('is-hidden');
    $('#cancelFrom').removeClass('is-hidden');

    const layToTime = this.fromLayOver * 60;

    const arrivalTime = this.departure_time - layToTime;
    console.log(arrivalTime);
    const data = {
      aircraftid: this.aircraft.aircraftId,
      departure: this.currentLoc.icao,
      destination: this.departure_airport.icao,
      arrivaltime: arrivalTime
    };
    this.adminService.route(data).subscribe(data => {
      this.routeId = data.data;
      console.log('response ', this.routeId);
      this.result = this.routeId;
      this.poll = interval(15000)
        .pipe(
          startWith(0),
          switchMap(() => this.adminService.longPoll(data.data))
        )
        .subscribe(res => {
          console.log(res.data);
          for (const el of res.data) {
            if (el.hasOwnProperty('aircraftid')) {
              this.poll.unsubscribe();
              this.adminService.getFplan(this.routeId).subscribe(data => {
                // console.log(data)
                this.routeDet.arrivaltime = data.data.arrivaltime;
                this.splitA = this.departure_time - data.data.arrivaltime;
                this.departure_time = data.data.departuretime;
                this.rotationStart = data.data.departuretime;
                this.routeDet.departuretime = data.data.departuretime;
                this.routeDet.fuel = data.data.fuelcalc.reqdfuel;
                this.routeDet.distance = data.data.gcdist;
                this.routeDet.fplan = { ...data.data.fplan };
                console.log(this.routeDet);
                console.log('split A', this.splitA);
                this.result = JSON.stringify(this.routeDet, undefined, 2);
                this.adminService.checkOverlap(this.aircraft.aircraftId, this.routeDet.departuretime,
                  this.routeDet.arrivaltime).subscribe(data => {

                    if (data.data.length === 0) {
                      this.addRoute('positionFrom', this.routeId);
                      this.positionFromDep = this.currentLoc.icao;
                      this.positionFromArr = this.departure_airport.icao;
                      this.positionFromDepT = this.routeDet.departuretime;
                      this.positionFromArrT = this.routeDet.arrivaltime;
                      this.adminService.updateCrew(this.pic_crew._id, this.routeDet.departuretime,
                        this.routeDet.arrivaltime).subscribe(data => {
                          console.log('updated', data);
                        });
                      this.adminService.updateCrew(this.fo_crew._id, this.routeDet.departuretime,
                        this.routeDet.arrivaltime).subscribe(data => {
                          console.log('updated', data);
                        });
                      $('#positionBtn').removeClass('is-loading');
                      $('#position-from').removeClass('is-active');
                      $('#position-to').addClass('is-active');
                    } else {
                      this.overlapFlight = data.data[0];
                      $('#flight-overlap').addClass('is-active');
                    }
                  });
              });
              break;
            }
          }
          this.result = JSON.stringify(res.data, undefined, 2);
          console.log(res.data.length);
        });
    });
  }
  doPositionTo(): void {
    $('#positionToBtn').addClass('is-loading');
    $('#resetTo').addClass('is-hidden');
    $('#cancelTo').removeClass('is-hidden');
    const layToTime = this.toLayOver * 60;

    const departTime = this.arrival_time + layToTime;
    console.log(departTime);
    const data = {
      aircraftid: this.aircraft.aircraftId,
      departure: this.arrival_airport.icao,
      destination: this.baseLoc.icao,
      departuretime: departTime
    };
    this.adminService.route(data).subscribe(data => {
      this.routeId = data.data;
      console.log('response ', this.routeId);
      this.result = this.routeId;
      this.poll = interval(15000)
        .pipe(
          startWith(0),
          switchMap(() => this.adminService.longPoll(data.data))
        )
        .subscribe(res => {
          console.log(res.data);
          for (const el of res.data) {
            if (el.hasOwnProperty('aircraftid')) {
              this.poll.unsubscribe();
              this.adminService.getFplan(this.routeId).subscribe(data => {
                // console.log(data)
                this.routeDet.arrivaltime = data.data.arrivaltime;
                this.splitB = data.data.departuretime - this.arrival_time;
                console.log('split B', this.splitB);
                this.rotationEnd = data.data.arrivaltime;
                this.rotationLength = this.rotationEnd - this.rotationStart;
                const rotationStartHour = new Date(this.rotationStart * 1000).getHours();
                const rotationEndHour = new Date(this.rotationEnd * 1000).getHours();
                const wocle = this.wocle(rotationStartHour, rotationEndHour);
                const splittime = this.splitA + this.splitB;
                const fdt = this.rotationLength + 3600 + splittime;
                const actualTOR = this.rotationLength + (wocle * 2);
                console.log('rotatStart ', this.rotationStart);
                console.log('rotatEnd ', this.rotationEnd);
                console.log('wocleS ', rotationStartHour);
                console.log('wocleE ', rotationEndHour);
                console.log('wocle ', wocle);
                console.log('fdt ', fdt);
                console.log('split ', splittime);
                console.log('actualTOR ', actualTOR);
                this.routeDet.departuretime = data.data.departuretime;
                this.routeDet.fuel = data.data.fuelcalc.reqdfuel;
                this.routeDet.distance = data.data.gcdist;
                this.routeDet.fplan = { ...data.data.fplan };
                console.log(this.routeDet);
                this.result = JSON.stringify(this.routeDet, undefined, 2);
                this.result = JSON.stringify({
                  'FDT': fdt,
                  'TOR': actualTOR,
                  'WOCLE': wocle,
                  'SPLIT TIME': splittime
                }, undefined, 2);
                this.adminService.checkOverlap(this.aircraft.aircraftId, this.routeDet.departuretime,
                  this.routeDet.arrivaltime).subscribe(data => {

                    if (data.data.length === 0) {
                      this.addRoute('positionTo', this.routeId);
                      this.positionToDep = this.arrival_airport.icao;
                      this.positionToArr = this.baseLoc.icao;
                      this.positionToDepT = this.routeDet.departuretime;
                      this.positionToArrT = this.routeDet.arrivaltime;
                      this.adminService.updateCrew(this.pic_crew._id, this.positionFromDepT, this.routeDet.arrivaltime).subscribe(data => {
                        console.log('updated', data);
                      });
                      this.adminService.updateCrew(this.fo_crew._id, this.positionFromDepT, this.routeDet.arrivaltime).subscribe(data => {
                        console.log('updated', data);
                      });
                      $('#suggested').addClass('is-active');
                      this.positionTo = data.data._id;
                      $('#positionToBtn').removeClass('is-loading');
                      $('#position-to').removeClass('is-active');
                    } else {
                      this.overlapFlight = data.data[0];
                      $('#flight-overlap').addClass('is-active');
                    }
                  });
              });
              break;
            }
          }
          this.result = JSON.stringify(res.data, undefined, 2);
          console.log(res.data.length);
        });
    });
  }
  cancel() {
    this.poll.unsubscribe();
    $('#addBtn').removeClass('is-loading');
    $('#reset').removeClass('is-hidden');
    $('#cancel').addClass('is-hidden');
  }
  cancelTo() {
    this.poll.unsubscribe();
    $('#positionToBtn').removeClass('is-loading');
    $('#resetTo').removeClass('is-hidden');
    $('#cancelTo').addClass('is-hidden');
  }
  cancelFrom() {
    this.poll.unsubscribe();
    $('#positionBtn').removeClass('is-loading');
    $('#resetFrom').removeClass('is-hidden');
    $('#cancelFrom').addClass('is-hidden');
  }
  cancelFlight(id, type) {
    this.adminService.deleteRoute(id).subscribe(data => {
      console.log(data.data);
      $('#cancelFlight').removeClass('is-loading');
      $('#flight-overlap').removeClass('is-active');
      if (type === 'live') {
        this.getCrew();
        this.lastLiveFlight(this.routeDet.departuretime);
        this.nextLiveFlight(this.routeDet.arrivaltime);
        this.currentLoc = {};
        this.currentLoc.name = '';
        this.LiveDep = this.departure_airport.icao;
        this.LiveArr = this.arrival_airport.icao;
        this.LiveDepT = this.routeDet.departuretime;
        this.LiveArr = this.routeDet.arrivaltime;
        $('#position-from').addClass('is-active');
      }
      if (type === 'positionFrom') {
        this.addRoute(type, this.routeId);
        this.positionFromDep = this.currentLoc.icao;
        this.positionFromArr = this.departure_airport.icao;
        this.positionFromDepT = this.routeDet.departuretime;
        this.positionFromArrT = this.routeDet.arrivaltime;
        this.adminService.getBriefing(this.routeId).subscribe(data => {
          console.log('briefing', data);
        });
        this.adminService.updateCrew(this.pic_crew._id, this.routeDet.departuretime, this.routeDet.arrivaltime).subscribe(data => {
          console.log('updated', data);
        });
        this.adminService.updateCrew(this.fo_crew._id, this.routeDet.departuretime, this.routeDet.arrivaltime).subscribe(data => {
          console.log('updated', data);
        });
        $('#positionBtn').removeClass('is-loading');
        $('#position-from').removeClass('is-active');
        $('#position-to').addClass('is-active');
      }
      if (type === 'positionTo') {
        this.addRoute(type, this.routeId);
        this.positionToDep = this.arrival_airport.icao;
        this.positionToArr = this.baseLoc.icao;
        this.positionToDepT = this.routeDet.departuretime;
        this.positionToArrT = this.routeDet.arrivaltime;
        this.adminService.updateCrew(this.pic_crew._id, this.positionFromDepT, this.routeDet.arrivaltime).subscribe(data => {
          console.log('updated', data);
        });
        this.adminService.updateCrew(this.fo_crew._id, this.positionFromDepT, this.routeDet.arrivaltime).subscribe(data => {
          console.log('updated', data);
        });
        $('#suggested').addClass('is-active');
        this.positionTo = data.data._id;
        $('#positionToBtn').removeClass('is-loading');
        $('#position-to').removeClass('is-active');
      }
    });
  }
  changeAircraft() {
    $('#flight-overlap').removeClass('is-active');
    this.cancel();
  }
  wocle(x, y) {
    if (x >= 2 && x <= 6 && y >= 2 && y <= 6) {
      return y - x;
    } else if (x >= 2 && x <= 6 && y >= 2 && y > 6) {
      return 6 - x;
    } else if (x < 2 || x > 6 && y >= 2 && y <= 6) {
      return y - 2;
    } else {
      return 0;
    }
  }
}
