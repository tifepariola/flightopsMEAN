import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { toast } from "bulma-toast";

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  sales: {};
  ngOnInit() {
    this.getSales();
  }
  getSales(): void {
    this.adminService.getSales().subscribe(data => {
      this.sales = data.data;
      console.log('sales ', this.sales)
    })
  }

  delete(aircraft): void {
    console.log('update start')
    this.adminService.deleteCrew(aircraft)
      .subscribe(data => {
        if (data.data === "deleted") {
          console.log('Airport Deleted ', data)
          this.getSales();
          toast({
            message: "Airport Deleted",
            type: "is-success",
            dismissible: true,
            pauseOnHover: true
          });
        }
      })
  }
}
