import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-crews',
  templateUrl: './crews.component.html',
  styleUrls: ['./crews.component.scss']
})
export class CrewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#btn-add-crew').on('click', function() {
      $('#add-crew').addClass('is-active');
    })
    $('.delete').on('click', function() {
      $('#add-crew').removeClass('is-active');
    })
  }

}
