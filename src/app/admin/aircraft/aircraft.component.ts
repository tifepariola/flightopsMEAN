import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-aircraft',
  templateUrl: './aircraft.component.html',
  styleUrls: ['./aircraft.component.scss']
})
export class AircraftComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#tabs li').on('click', function () {
      var tab = $(this).data('tab');

      $('#tabs li').removeClass('is-active');
      $(this).addClass('is-active');

      $('#tab-content div').removeClass('is-active');
      $('div[data-content="' + tab + '"]').addClass('is-active');
    });
  }

}
