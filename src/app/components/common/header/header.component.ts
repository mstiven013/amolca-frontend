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
    localStorage.removeItem('C0uN7r1');
    let me = this;
    setTimeout(function() {
      me.getGeolocalization();
    }, 200);
  }

  getGeolocalization() {
    let c = localStorage.getItem('C0uN7r1');

    if(c === null || c === undefined) {
      jQuery.getJSON('http://ip-api.com/json?callback', function(data) {
        localStorage.setItem('C0uN7r1', data.country.toUpperCase());

        c = localStorage.getItem('C0uN7r1');

        if(c !== null) {
          //Redirecciones ARGENTINA
          if(c === 'PERU' && window.location.href.indexOf("amolca.com.ar") > 0) {
            window.location.href = 'http://www.amolca.com.pe';
          } else if(c === 'DOMINICAN REPUBLIC' && window.location.href.indexOf("amolca.com.ar") > 0) {
            window.location.href = 'http://www.amolca.com.do';
          } else if(c === 'COLOMBIA' && window.location.href.indexOf("amolca.com.ar") > 0) {
            window.location.href = 'http://www.amolca.com.co';
          } else if(c === 'ARGENTINA' && window.location.href.indexOf("amolca.com.ar") > 0) {
            return true;
          } else {
            window.location.href = 'http://www.amolca.com';
          }
        }
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
