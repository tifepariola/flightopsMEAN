import { Component, OnInit, NgZone, Input } from '@angular/core';
import * as $ from 'jquery';
import { AdminService } from '../admin.service';
import { FileUpload } from '../fileupload';
import { toast } from "bulma-toast";

@Component({
  selector: 'app-crews',
  templateUrl: './crews.component.html',
  styleUrls: ['./crews.component.scss']
})
export class CrewsComponent implements OnInit {

  @Input()
  responses: Array<any>;
  password: string;
  repeatPassword: string;
  doRun: boolean;

  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  progress: { percentage: number } = { percentage: 0 };
  crewid: string;
  constructor(private adminService: AdminService) {
    this.responses = [];
  }
  crews: {};
  name: string;
  img_url: string;
  occupation: string;
  p_email: string;
  s_email: string;
  p_phone: string;
  s_phone: string;
  licence: string;
  update: boolean = false;
  expiry: string;
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;

    this.currentFileUpload = new FileUpload(file);
    this.adminService.pushFileToStorage(this.currentFileUpload, this.progress).subscribe(data => {
      this.img_url = data.data
      console.log('file uploaded ', this.img_url)
    })
  }
  ngOnInit() {
    this.doRun = true;

    $('#btn-add-crew').on('click', function () {
      $('#add-crew').addClass('is-active');
    })
    $('.delete').on('click', function () {
    })
    this.getCrews();




  }
  close(): void {
    this.update = false
    $('#add-crew').removeClass('is-active');
    this.name = ''
    this.img_url = ''
    this.occupation = ''
    this.p_email = ''
    this.s_email = ''
    this.p_phone = ''
    this.s_phone = ''
  }
  getCrews(): void {
    this.adminService.getCrews().subscribe(data => {
      this.crews = data.data;
      console.log('crews ', this.crews)
    })
  }
  edit(id) {
    this.adminService.getCrew(id).subscribe(data => {
      this.crewid = id
      this.name = data.data.name
      this.img_url = data.data.img_url
      this.occupation = data.data.occupation
      this.p_email = data.data.p_email
      this.s_email = data.data.s_email
      this.p_phone = data.data.p_phone
      this.s_phone = data.data.s_phone
      $('#add-crew').addClass('is-active');
      console.log('crewww', data.data)
    })

  }
  addCrew(userID): void {
    console.log('add start')
    this.adminService.addCrew(this.name, this.img_url, this.occupation, 0, 0, this.p_email, this.s_email, this.p_phone, this.s_phone, this.licence, this.expiry, userID)
      .subscribe(data => {
        console.log('Crew Added ', data)
        this.getCrews();
        this.doRun = false;
        $('form').trigger("reset");
        $('#addBtn').removeClass('is-loading');
      },
        error => {
          $('#addBtn').removeClass('is-loading');
          console.log(error)
        })
  }
  updateCrew(): void {
    console.log('update start')
    this.adminService.updateCrewData(this.crewid, this.name, this.img_url, this.occupation, this.p_email, this.s_email, this.p_phone, this.s_phone)
      .subscribe(data => {
        console.log('Crew Updated ', data)
        this.getCrews();
        $('form').trigger("reset");
        $('#addBtn').removeClass('is-loading');
      },
        error => {
          $('#addBtn').removeClass('is-loading');
          console.log(error)
        })
  }
  deleteCrew(crewid): void {
    console.log('update start')
    this.adminService.deleteCrew(crewid)
      .subscribe(data => {
        if (data.data === "deleted") {
          console.log('Crew Deleted ', data)
          this.getCrews();
          toast({
            message: "Crew Member Deleted",
            type: "is-success",
            dismissible: true,
            pauseOnHover: true
          });
        }
      })
  }

  register() {

    $('#addBtn').addClass('is-loading');
    if (this.doRun === true) {
      if (this.password === this.repeatPassword) {
        this.adminService.addUser(this.name, this.p_email, this.password, this.repeatPassword, "crew", this.occupation)
          .subscribe(data => {
            console.log('new user ', data)
            this.addCrew(data.data._id);
          })
      }
    }
  }
}
