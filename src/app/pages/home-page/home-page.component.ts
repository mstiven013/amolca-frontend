import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _appComponent: AppComponent
  ) { }

  specialties = {
    medicina: '5bbba0ff7a4f39001363ebae',
    odontologia: '5bbba1197a4f39001363ebaf'
  }

  ngOnInit() {
    window.scrollTo(0,0);
    this._appComponent.setMetaTitle('Amolca - Editorial médica y odontológica orientada a las ciencias de la salud');
  }

}
