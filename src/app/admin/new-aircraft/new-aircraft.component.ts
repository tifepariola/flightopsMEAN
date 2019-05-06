import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

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

  constructor(private adminService: AdminService, private route: ActivatedRoute) { }

  registration: string;
  manufacturer: string;
  type: string;
  model: string;
  year: string;
  base: {};
  fuel_type: string;
  mass_unit: string;
  speed_unit: string;
  fuel_unit: string;
  comment: string;

  ngOnInit() {
    this.base = {}
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
      { id: this.takeOffCount, density: '0', ground_roll: '0', obstacle: '0' }
    ;
    this.takeOffList.push(takeOff);
  }
  addLanding() {
    this.landingCount = this.landingCount + 1
    const landing = 
      { id: this.landingCount, density: '0', ground_roll: '0', obstacle: '0' }
    ;
    this.landingList.push(landing);
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

}
