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
    medicina: '5b6e008952cb3c24201b9ed6',
    odontologia: '5b6dfb0fc6602423d0eb35f5'
  }

  ngOnInit() {
    this._appComponent.setMetaTitle('Amolca - Editorial médica y odontológica orientada a las ciencias de la salud');
  }

}
