import { Component, OnInit, NgZone, Input } from '@angular/core';
import * as $ from 'jquery';
import { AdminService } from '../admin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.scss']
})
export class AirportsComponent implements OnInit {

  @Input()
  responses: Array<any>;
  doRun: boolean;
  pageNo: any;

  constructor(private adminService: AdminService, private router: Router, private route: ActivatedRoute) {
    this.responses = [];
  }

  airports: {};
  ngOnInit() {
        this.doRun = true;
    this.pageNo = this.route.snapshot.paramMap.get("pageNo")
    $('#btn-add-aircraft').on('click', function () {
      $('#add-aircraft').addClass('is-active');
    })
    $('.delete').on('click', function () {
      $('#add-aircraft').removeClass('is-active');
    })

    this.getAirports();

  }

  getAirports(): void {
    this.adminService.getAirports(this.pageNo, 20).subscribe(data => {
      this.airports = data.data;
      console.log('airports ', this.airports)
    })
  }
  next(): void {
    this.pageNo = parseInt(this.pageNo) + 1;
    console.log(this.pageNo)
    this.getAirports()
  }
  prev(): void {
    this.pageNo = parseInt(this.pageNo) - 1;
    console.log(this.pageNo)
    this.getAirports()
  }

  navigate(link): void {
    this.router.navigate([link]);
  }

}
