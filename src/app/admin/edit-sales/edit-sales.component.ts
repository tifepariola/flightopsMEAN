import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { AdminService } from '../admin.service';
import * as $ from 'jquery';
import { DOCUMENT } from '@angular/platform-browser';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-sales',
  templateUrl: './edit-sales.component.html',
  styleUrls: ['./edit-sales.component.scss']
})
export class EditSalesComponent implements OnInit {
  airports: any;

  exampleOptions: FlatpickrOptions = {
    enableTime: true,
    mode: "single"
  };
  reference_id: string;
  doRun: boolean;
  id: any;
  _id: any;
  constructor(private adminService: AdminService, private renderer: Renderer2, private route: ActivatedRoute,
    @Inject(DOCUMENT) private document: any) { }

  company_name: string;
  contact_name: string;
  contact_email: string;
  contact_phone: string;
  weight: string;
  dangerous: string;
  description: string;
  instructions: string;
  origin_airport: string;
  destination_airport: string;
  departure: string;
  estimated_cost: string;
  price_charged: string;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id")
    this.getAirports();
    this.doRun = true
  }

  ngAfterViewInit() {
    // addClass hack until ng2-flatpickr takes my PR
    this.renderer.addClass(this.document.getElementsByClassName('ng2-flatpickr-input flatpickr-input')[0], 'input');
  }
  getAirports(): void {
    this.adminService.getAirports(1, 20).subscribe(data => {
      this.airports = data.data;
      console.log('airports ', this.airports)
    })
  }
  getSale(): void {
    console.log('getting airport')
    this.adminService.getSale(this.id).subscribe(data => {
      var sale = data.data
      this._id = sale._id
      this.company_name = sale.company_name
      this.contact_name = sale.contact_name
      this.contact_email = sale.contact_email
      this.contact_phone = sale.contact_phone
      this.weight = sale.weight
      this.description = sale.description
      this.instructions = sale.instructions
      this.origin_airport = sale.origin_airport
      this.destination_airport = sale.destination_airport
      this.departure = sale.departure
      this.estimated_cost = sale.estimated_cost
      this.price_charged = sale.price_charged
      console.log('airport got', sale)
    })
  }
  updateSale(): void {
    console.log('add start')
    $('#addBtn').addClass('is-loading');
    if (this.doRun === true) {
      this.adminService.updateSale(this.id, this.company_name, this.contact_name, this.contact_email, this.contact_phone, this.weight, this.dangerous, this.instructions, this.description, this.origin_airport, this.destination_airport, Date.parse(this.departure) / 1000, this.reference_id, this.estimated_cost, this.price_charged)
        .subscribe(data => {
          console.log('Aircraft Updated ', data)
          // this.getAircrafts();
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
