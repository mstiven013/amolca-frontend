import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { MatTabsModule } from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {

  constructor(
    private _appComponent: AppComponent,
    private _router: Router
  ) { }

  ngOnInit() {
    this._appComponent.setMetaTitle('Iniciar sesión - Editorial Amolca');

    this.ifUserLoggedIn();
  }

  ifUserLoggedIn(){
    if(localStorage.getItem('U53r') != undefined) {
      this._router.navigate(['mi-cuenta']);
    }
  }

}
