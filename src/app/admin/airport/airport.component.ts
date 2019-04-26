import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-airport',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.scss']
})
export class AirportComponent implements OnInit {
  id: any;
  handlers: any;

  constructor(private adminService: AdminService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id")
    this.getHandlers(this.id);
  }
  getHandlers(airport): void {
    this.adminService.getHandler(airport).subscribe(data => {
      this.handlers = data.data;
      console.log('handlers ', this.handlers)
    })
  }

}
