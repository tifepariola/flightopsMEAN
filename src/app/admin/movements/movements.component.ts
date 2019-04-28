import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.scss']
})
export class MovementsComponent implements OnInit {
  movements: any;
  flightID: any;
  next3Days: Date;
  today: Date;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.getFlight()
    this.today = new Date()
    this.addDays(this.today, 3)
  }
  addDays(date, days): void {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    this.next3Days = result;
    console.log(this.next3Days)
  }
  getFlight(): void {
    this.adminService.getMovements().subscribe(data => {
      this.movements = data.data;
      console.log('movements ', this.movements)
    })
  }
  fileFPL(movement): void {
    this.adminService.fileFPL(movement.route).subscribe(data => {
      this.flightID = data.data.flightid;
      console.log('fileFPL ', data)
      if (this.flightID) {
        this.adminService.updateFiled(movement._id, true).subscribe(data => {
          this.getFlight()
          console.log('update filed ', data)
        })
        this.cancelFPL();
      }
    })
  }
  cancelFPL(): void {
    this.adminService.cancelFPL(this.flightID).subscribe(data => {
      console.log('cancelFPL ', data)
    })
  }
  download(id): void {
    console.log(id)

    this.adminService.downloadBriefing(id).subscribe()
  }

}
