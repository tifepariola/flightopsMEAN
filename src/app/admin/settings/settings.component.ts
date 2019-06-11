import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AdminService } from '../admin.service';
import { FormControl, ValidationErrors, FormGroup, Validators } from '@angular/forms';
import { toast } from 'bulma-toast';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  crewTemplate: any;
  handlerTemplate: any;
  user: any;
  update: boolean;

  constructor(private adminService: AdminService) { }

  users: {};
  ngOnInit() {
    this.getTemplates();
    $('#btn-add-user').on('click', function () {
      $('#add-user').addClass('is-active');
    });
    this.getUsers();
  }
  getUsers(): void {
    this.adminService.getUsers().subscribe(data => {
      this.users = data.data;
      console.log('crews ', this.users);
    });
  }
  getUser(id): void {
    this.adminService.getUser(id).subscribe(data => {
      this.update = true;
      this.user = data.data;
      this.userForm.patchValue({
        fullname: this.user.fullname,
        email: this.user.email
      });
      $('#add-user').addClass('is-active');
      console.log('user ', this.user);
    });
  }

  close(): void {
    this.update = false;
    $('#add-user').removeClass('is-active');
    this.userForm.patchValue({
      fullname: '',
      email: ''
    });
  }
  passwordsMatchValidator(control: FormControl): ValidationErrors {
    const password = control.root.get('password');
    return password && control.value !== password.value ? {
      passwordMatch: true
    } : null;
  }

  userForm = new FormGroup({
    fullname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    repeatPassword: new FormControl('', [Validators.required, this.passwordsMatchValidator])
  });

  get fullname(): any { return this.userForm.get('fullname'); }
  get email(): any { return this.userForm.get('email'); }
  get password(): any { return this.userForm.get('password'); }
  get repeatPassword(): any { return this.userForm.get('repeatPassword'); }

  getTemplates(): void {
    this.adminService.getTemplates().subscribe(data => {
      this.crewTemplate = data.data[0];
      this.handlerTemplate = data.data[1];
      console.log('get templates ', this.crewTemplate);
    });
  }
  saveHandler(): void {
    this.adminService.updateTemplate(this.handlerTemplate._id, this.handlerTemplate.subject, this.handlerTemplate.message).subscribe(data => {

      console.log('update ', data);
    });
  }
  saveCrew(): void {
    this.adminService.updateTemplate(this.crewTemplate._id, this.crewTemplate.subject, this.crewTemplate.message).subscribe(data => {

      console.log('update ', data);
    });
  }
  handleHandlerChange(value): void {
    this.handlerTemplate.message = value;
    console.log(value);
    console.log(this.handlerTemplate.message);
  }
  handleCrewChange(value): void {
    this.crewTemplate.message = value;
  }
  register() {

    if (!this.userForm.valid) { return; }

    const {
      fullname,
      email,
      password,
      repeatPassword
    } = this.userForm.getRawValue();

    this.adminService.addUser(fullname, email, password, repeatPassword, 'admin', '')
      .subscribe(data => {
        console.log('new user ', data);
      });
  }
  updateUser() {
    console.log('update user', this.passwordsMatchValidator);

    const {
      fullname,
      email,
      password,
      repeatPassword
    } = this.userForm.getRawValue();

    this.adminService.updateUser(this.user._id, fullname, email, password, repeatPassword, this.user.role, this.user.occupation)
      .subscribe(data => {
      $('#add-user').removeClass('is-active');
          this.getUsers();
          console.log('update user ', data);
        toast({
          message: 'User Updated',
          type: 'is-success',
          dismissible: true,
          pauseOnHover: true
        });
      });
  }

  delete(user): void {
    console.log('update start');
    this.adminService.deleteUser(user)
      .subscribe(data => {
        if (data.data === 'deleted') {
          console.log('User Deleted ', data);
          this.getUsers();
          toast({
            message: 'User Deleted',
            type: 'is-success',
            dismissible: true,
            pauseOnHover: true
          });
        }
      });
  }


}
