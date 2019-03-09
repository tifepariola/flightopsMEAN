import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.scss']
})
export class AircraftsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#btn-add-aircraft').on('click', function() {
      $('#add-aircraft').addClass('is-active');
    })
    $('.delete').on('click', function() {
      $('#add-aircraft').removeClass('is-active');
    })
  }

}
