import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _appComponent: AppComponent
  ) { }

  ngOnInit() {
    this._appComponent.setMetaTitle('Amolca - Editorial médica y odontológica orientada a las ciencias de la salud');
  }

}
