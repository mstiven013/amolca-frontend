import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { country } from '../assets/data/country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(
    private _titleService: Title,
    private _meta: Meta,
  ) {}

  ngOnInit() {
    window.scrollTo(0,0);
    localStorage.removeItem('C0uN7r1');
    let me = this;
    setTimeout(function() {
      me.getGeolocalization();
    }, 200);
  }

  getGeolocalization() {
    jQuery.getJSON('http://ip-api.com/json?callback', function(data) {
      localStorage.setItem('C0uN7r1', data.country.toUpperCase());
      let c = localStorage.getItem('C0uN7r1');
      
      if(c !== null) {
        //Redirecciones COLOMBIA
        /*if(c === 'ARGENTINA' && window.location.href.indexOf("amolca.com.co") > 0) {
          window.location.href = 'http://www.amolca.com.ar';
        } else if(c === 'PERU' && window.location.href.indexOf("amolca.com.co") > 0) {
          window.location.href = 'http://www.amolca.com.pe';
        } else if(c === 'DOMINICAN REPUBLIC' && window.location.href.indexOf("amolca.com.co") > 0) {
          window.location.href = 'http://www.amolca.com.do';
        } else if(c === 'COLOMBIA' && window.location.href.indexOf("amolca.com.co") > 0) {
          return true;
        } else {
          window.location.href = 'http://www.amolca.com';
        }*/
      }
    });
    
  }

  public setMetaTitle( newTitle: string ) {
    this._titleService.setTitle( newTitle );
  }

  public setMetaDescription( newDescription: string ) {
    this._meta.addTag({ name: "description", content: newDescription });
  }

}
