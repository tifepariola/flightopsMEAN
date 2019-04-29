import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-new-airport',
  templateUrl: './new-airport.component.html',
  styleUrls: ['./new-airport.component.scss']
})
export class NewAirportComponent implements OnInit {
  doRun: boolean;

  constructor(private adminService: AdminService) { }


  name: string;
  country: string;
  icao: string;
  latitude: number;
  longitude: number;
  elevation: number;
  longest_runway: number;
  magnetic_variation: number;
  airport_type: string;
  beacon: string;
  fuel_types: string;
  landing_fee: boolean;
  oxygen: string;
  repairs: string;
  ngOnInit() {
    this.doRun = true
  }
  addAirport(): void {
    console.log('add start')
    $('#addBtn').addClass('is-loading');
    if (this.doRun === true) {
      this.adminService.addAirport(this.name, this.country, this.icao, this.latitude, this.longitude, this.elevation, this.longest_runway, this.magnetic_variation, this.airport_type, this.beacon, this.fuel_types, this.landing_fee, this.oxygen, this.repairs)
        .subscribe(data => {
          console.log('Aircraft Added ', data)
          $('form').trigger("reset");
          $('#addBtn').removeClass('is-loading');
          this.doRun = false
        },
          error => {
            $('#addBtn').removeClass('is-loading');
            console.log(error)
          })
    }
  }

}
