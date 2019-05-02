import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AdminService } from '../admin.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { toast } from "bulma-toast";

@Component({
  selector: 'app-edit-airport',
  templateUrl: './edit-airport.component.html',
  styleUrls: ['./edit-airport.component.scss']
})
export class EditAirportComponent implements OnInit {
  doRun: boolean;
  id: string;
  _id: string;

  constructor(private adminService: AdminService, private route: ActivatedRoute, private router: Router) { }


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
    this.id = this.route.snapshot.paramMap.get("id")
    this.doRun = true
    this.getAirport()
  }
  getAirport(): void {
    console.log('getting airport')
    this.adminService.getAirportDetails(this.id).subscribe(data => {
      var airport = data.data
      this._id = airport._id
      this.name = airport.name
      this.country = airport.country
      this.icao = airport.icao
      this.latitude = airport.latitude
      this.longitude = airport.longitude
      this.elevation = airport.elevation
      this.longest_runway = airport.longest_runway
      this.magnetic_variation = airport.magnetic_variation
      this.airport_type = airport.airport_type
      this.beacon = airport.beacon
      this.fuel_types = airport.fuel_types
      this.landing_fee = airport.landing_fee
      this.oxygen = airport.oxygen
      this.repairs = airport.repairs
      console.log('airport got', airport)
    })
  }
  updateAirport(): void {

    console.log('update start')
    this.adminService.updateAirport(this._id, this.name, this.country, this.icao, this.latitude, this.longitude, this.elevation, this.longest_runway, this.magnetic_variation, this.airport_type, this.beacon, this.fuel_types, this.landing_fee, this.oxygen, this.repairs)
      .subscribe(data => {
        console.log('Crew Updated ', data)
      toast({
        message: "Airport Updated",
        type: "is-success",
        dismissible: true,
        pauseOnHover: true
      });
        
      })
  }



}
