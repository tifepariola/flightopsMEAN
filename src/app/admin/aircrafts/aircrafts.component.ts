import { Component, OnInit, NgZone, Input } from '@angular/core';
import * as $ from 'jquery';
import { AdminService } from '../admin.service';
import { FileUpload } from '../fileupload';
import { toast } from "bulma-toast";

@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.scss']
})
export class AircraftsComponent implements OnInit {

  @Input()
  responses: Array<any>;
  aircraftId: string;
  base: string;
  airports: any;
  doRun: boolean;

  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  progress: { percentage: number } = { percentage: 0 };
  id: any;
  constructor(private adminService: AdminService) {
    this.responses = [];
  }

  aircrafts: {};
  registration: string;
  tow: string;
  image: string;
  fuel: string;
  update: boolean = false;
  pax: string;
  icao24: string;
  cargo: string;
  ngOnInit() {
    this.doRun = true;
    $('#btn-add-aircraft').on('click', function () {
      $('#add-aircraft').addClass('is-active');
    })
    $('.delete').on('click', function () {
      $('#add-aircraft').removeClass('is-active');
    })
    this.getAirports();
    this.getAircrafts();

  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  close(): void {
    this.update = false
    $('#add-aircraft').removeClass('is-active');
    this.registration = ''
    this.image = ''
    this.tow = ''
    this.fuel = ''
    this.pax = ''
    this.cargo = ''
    this.icao24 = ''
    this.base = ''
    this.aircraftId = ''
  }
  upload() {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;

    this.currentFileUpload = new FileUpload(file);
    this.adminService.pushFileToStorage(this.currentFileUpload, this.progress).subscribe(data => {
      this.image = data.data
      console.log('file uploaded ', this.image)
    })
  }
  getAircrafts(): void {
    this.adminService.getAircrafts().subscribe(data => {
      this.aircrafts = data.data;
      console.log('aircrafts ', this.aircrafts)
    })
  }
  getAirports(): void {
    this.adminService.getAirports(1, 20).subscribe(data => {
      this.airports = data.data;
      console.log('airports ', this.airports)
    })
  }
  addAircraft(): void {
    console.log('add start')
    $('#addBtn').addClass('is-loading');
    if (this.doRun === true) {
      // this.adminService.addAircraft(this.registration, this.aircraftId, this.image, this.tow, this.fuel, this.pax, this.cargo, this.icao24, this.base)
      //   .subscribe(data => {
      //     console.log('Aircraft Added ', data)
      //     this.getAircrafts();
      //     $('form').trigger("reset");
      //     $('#addBtn').removeClass('is-loading');
      //     // $('#add-aircraft').removeClass('is-active');
      //     this.doRun = false
      //   },
      //     error => {
      //       $('#addBtn').removeClass('is-loading');
      //       console.log(error)
      //     })
    }
  }

  updateAircraft(): void {
    console.log('update start')
    this.adminService.updateAircraft(this.id, this.registration, this.aircraftId, this.image, this.tow, this.fuel, this.pax, this.cargo, this.icao24, this.base)
      .subscribe(data => {
        console.log('Crew Updated ', data)
        this.getAircrafts();
        toast({
          message: "Aircraft Updated",
          type: "is-success",
          dismissible: true,
          pauseOnHover: true
        });
        $('form').trigger("reset");
        $('#addBtn').removeClass('is-loading');
        $('#add-aircraft').removeClass('is-active');
      })
  }

  delete(aircraft): void {
    console.log('update start')
    this.adminService.deleteCrew(aircraft)
      .subscribe(data => {
        if (data.data === "deleted") {
          console.log('Crew Deleted ', data)
          this.getAircrafts();
          toast({
            message: "Aircraft Deleted",
            type: "is-success",
            dismissible: true,
            pauseOnHover: true
          });
        }
      })
  }

  edit(aircraft) {
    this.id = aircraft._id
    this.registration = aircraft.registration;
    this.tow = aircraft.tow
    this.aircraftId = aircraft.aircraftId
    this.image = aircraft.img_url
    this.fuel = aircraft.fuel;
    this.pax = aircraft.pax;
    this.cargo = aircraft.cargo;
    this.icao24 = aircraft.icao24
    this.base = aircraft.base
    $('#add-aircraft').addClass('is-active');
  }



}
