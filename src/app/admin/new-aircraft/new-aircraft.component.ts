import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import { toast } from "bulma-toast";

@Component({
  selector: 'app-new-aircraft',
  templateUrl: './new-aircraft.component.html',
  styleUrls: ['./new-aircraft.component.scss']
})
export class NewAircraftComponent implements OnInit {
  editField: string;
  takeOffList: Array<any> = [];
  landingList: Array<any> = [];
  airports: any[];
  last: boolean = false;
  current: number = 1;
  first: boolean = true;
  takeOffCount: number = 0;
  landingCount: number = 0;
  manufacturers: [];
  aircraftTypes: any;
  icaotype: any;

  constructor(private adminService: AdminService, private router: Router, private route: ActivatedRoute) { }

  callsign: string;
  manufacturer: any;
  icaotypename: string;
  modelname: string;
  year: string;
  homebase = {
    name: '',
    icao: ''
  };
  fueltype: string;
  speedunit: string;
  fuelunit: string;
  comment: string;
  equipment: string;
  transponder: string;
  com: string;
  nav: string;
  dat: string;
  picname: string;
  crewcontact: string;
  colormarking: string;
  dinghies: string;
  dinghycapacity: number;
  dinghycolor: string;
  dinghycover: boolean;
  emergencyradio: string;
  survival: string;
  lifejackets: string;
  wb: object = {
    massunitname: "",
    mtom: 0,
    mlm: 0,
    mrm: 0,
    armunitname: "",
  };
  distances = {
    unitname: "",
    vrotate: 0,
    takeoff: [],
    landing: []
  };
  defaultmaxfl: string;
  maxbhp: string;
  taxifuel: string;
  taxifuelflow: string;
  contingencyfuel: string;

  ngOnInit() {
    this.getManufacturers()

  }

  updateTakeOffList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.takeOffList[id][property] = editField;
  }
  updateLandingList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.landingList[id][property] = editField;
  }

  removeTakeOff(id: any) {
    this.takeOffList.splice(id, 1);
  }
  removeLanding(id: any) {
    this.landingList.splice(id, 1);
  }

  addTakeOff() {
    this.takeOffCount = this.takeOffCount + 1
    const takeOff =
      { id: this.takeOffCount, da: '0', gnddist: '0', obstdist: '0' }
      ;
    this.distances.takeoff.push(takeOff);

  }
  addLanding() {
    this.landingCount = this.landingCount + 1
    const landing =
      { id: this.landingCount, da: '0', gnddist: '0', obstdist: '0' }
      ;
    this.distances.landing.push(landing);
  }

  changeTakeOffValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
    console.log('edit ', this.takeOffList)
  }
  changeLandingValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
    console.log('edit ', this.landingList)
  }
  getAirports(keyword, type): void {
    if (keyword.length > 2) {
      this.airports = []
      $('#' + type).addClass('is-active')
      this.adminService.findAirports(keyword).subscribe(data => {
        console.log('search ', data.data)
        this.airports = data.data
      })
    }
  }
  next() {
    this.first = false
    $(".steps-segment[data-step='" + this.current + "']").removeClass("is-active");
    $("#step-" + this.current).addClass("is-hidden");
    this.current = this.current + 1
    if (this.current === 6) {
      this.last = true
    }
    $(".steps-segment[data-step='" + this.current + "']").addClass("is-active");
    $("#step-" + this.current).removeClass("is-hidden");
  }
  prev() {
    this.last = false
    $(".steps-segment[data-step='" + this.current + "']").removeClass("is-active");
    $("#step-" + this.current).addClass("is-hidden");
    this.current = this.current - 1
    if (this.current === 1) {
      this.first = true
    }
    $(".steps-segment[data-step='" + this.current + "']").addClass("is-active");
    $("#step-" + this.current).removeClass("is-hidden");
  }
  addAircraft() {
    this.adminService.addAircraft(this.callsign, this.manufacturer.name, this.manufacturer.id, this.icaotype.icao, this.icaotype.id, this.modelname, this.modelname, this.year, this.homebase.icao, this.fueltype, this.speedunit, this.fuelunit, this.comment, this.equipment, this.transponder, this.com, this.nav, this.dat, this.picname, this.crewcontact, this.colormarking, this.dinghies, this.dinghycapacity, this.dinghycolor, this.dinghycover, this.emergencyradio, this.survival, this.lifejackets, this.wb, this.distances, this.defaultmaxfl, this.maxbhp, this.taxifuel, this.taxifuelflow, this.contingencyfuel).subscribe(data => {
      console.log('Aircraft Added ', data)
      this.adminService.addAircraftDB(data.data).subscribe(data => {
        // this.navigate('/admin/aircrafts')
        $('form').trigger("reset");
        toast({
          message: "Aircraft Created",
          type: "is-success",
          dismissible: true,
          pauseOnHover: true
        });
      })
    },
      error => {
        $('#addBtn').removeClass('is-loading');
        console.log(error)
      })
  }
  getManufacturers() {
    this.adminService.getManufacturers().subscribe(data => {
      this.manufacturers = data.data

      console.log('Manufacturers ', this.manufacturers)
    })
  }
  getAircraftTypes() {
    this.adminService.getAircraftTypes(this.manufacturer.id).subscribe(data => {
      this.aircraftTypes = data.data
      console.log('Aircraft Types ', this.aircraftTypes)
    })
  }
  navigate(link): void {
    this.router.navigate([link]);
  }

  hideSearch(): void {
    console.log(this.homebase)
    $('.dropdown').removeClass('is-active');

  }
}
