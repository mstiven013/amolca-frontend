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

    $.get("https://ipinfo.io", function(response) {
      //console.log(response);

      let search = country.filter(c => c.code == response.country);
      let active = search[0].name.toUpperCase();

      localStorage.setItem('C0uN7r1', active.toUpperCase());

      c = localStorage.getItem('C0uN7r1')
    
      //Redirecciones COLOMBIA
      if(c === 'ARGENTINA' && window.location.href.indexOf("amolca.com.co") > 0) {
        window.location.href = 'http://www.amolca.com.ar';
      } else if(c === 'PERU' && window.location.href.indexOf("amolca.com.co") > 0) {
        window.location.href = 'http://www.amolca.com.pe';
      } else if(c === 'DOMINICAN REPUBLIC' && window.location.href.indexOf("amolca.com.co") > 0) {
        window.location.href = 'http://www.amolca.com.do';
      } else if(c === 'COLOMBIA' && window.location.href.indexOf("amolca.com.co") > 0) {
        return true;
      } else {
        window.location.href = 'http://www.amolca.com';
      } 
    }, "jsonp")

  }

}
