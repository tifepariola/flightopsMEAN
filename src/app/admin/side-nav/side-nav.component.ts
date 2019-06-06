import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  zuluTime: any;
  localTime: any;

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    setInterval(() => { this.startTime(); this.startZuluTime(); }, 1000);
    this.zuluTime = new Date();
  }
  checkTime(i) {
    if (i < 10) {
      i = '0' + i;
    }
    return i;
  }

  startTime(): void {
    const today = new Date();
    let d = today.getDate();
    let mm = today.getMonth();
    const y = today.getFullYear();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    // add a zero in front of numbers<10
    d = this.checkTime(d);
    mm = this.checkTime(mm);
    h = this.checkTime(h);
    m = this.checkTime(m);
    s = this.checkTime(s);
    this.localTime = d + '-' + mm + '-' + y + ' ' + h + ':' + m + ':' + s;
  }

  startZuluTime(): void {
    const today = new Date();
    let d = today.getUTCDate();
    let mm = today.getUTCMonth();
    const y = today.getUTCFullYear();
    let h = today.getUTCHours();
    let m = today.getUTCMinutes();
    let s = today.getUTCSeconds();
    // add a zero in front of numbers<10
    d = this.checkTime(d);
    mm = this.checkTime(mm);
    h = this.checkTime(h);
    m = this.checkTime(m);
    s = this.checkTime(s);
    this.zuluTime = d + '-' + mm + '-' + y + ' ' + h + ':' + m + ':' + s;
  }

  logout(): void {
    this.authService.signOut();
    this.navigate('/auth/login');
  }
  newFlight(): void {
    console.log('hello');
    $('#createFlight').addClass('show');
    $('body').addClass('modal-open');
    $('body').append('<div class="modal-backdrop fade show"></div>');
  }
  close(): void {
    $('#createFlight').removeClass('show');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();

  }
  navigate(link): void {
    this.router.navigate([link]);
  }
}
