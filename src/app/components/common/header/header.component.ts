import { Component, OnInit } from '@angular/core';
import { country } from '../../../../assets/data/country';

declare var jQuery: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getGeolocalization();
  }

  getGeolocalization() {
    let c = localStorage.getItem('C0uN7r1');

    if(c === null || c === undefined) {
      jQuery.getJSON('http://ip-api.com/json?callback', function(data) {
        localStorage.setItem('C0uN7r1', data.country.toUpperCase());
      });
    }
  }

  //Use this function when the API "ip-api.com" not works
  getNavigatorCountry() {
    let nCountry = navigator.language.split('-')[1];
    let activeCountry = country.filter( aC => aC.code === nCountry );
    console.log(activeCountry[0].name.toUpperCase())
  }

}
