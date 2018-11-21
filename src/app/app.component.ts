import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

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
      });
    }
    if(c !== null) {
      if(c === 'COLOMBIA' && window.location.href.indexOf("amolca.com.co") < 1) {
        window.location.href = 'http://www.amolca.com.co';
      }
    }
  }

  public setMetaTitle( newTitle: string ) {
    this._titleService.setTitle( newTitle );
  }

  public setMetaDescription( newDescription: string ) {
    this._meta.addTag({ name: "description", content: newDescription });
  }

}
