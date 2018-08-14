import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {

  constructor(
    private _appComponent: AppComponent
  ) { }

  ngOnInit() {
    this._appComponent.setMetaTitle('Iniciar sesión - Editorial Amolca');
  }

}
