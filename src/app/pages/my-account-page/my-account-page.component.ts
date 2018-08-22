import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-my-account-page',
  templateUrl: './my-account-page.component.html',
  styleUrls: ['./my-account-page.component.scss']
})
export class MyAccountPageComponent implements OnInit {

  //Declare "user" var
  user: any;

  constructor(
    private _appComponent: AppComponent,
    private _authService: AuthService
  ) { }

  ngOnInit() {
    this.getUserData();

    //Set Metatitle
    this._appComponent.setMetaTitle(`${this.user.name} ${this.user.lastname} - Mi cuenta | Editorial médica y odontológica`);

    //Subscribe to user changes
    this._authService.userDataWatch()
      .subscribe(
        data => this.user = data
      )
  }

  getUserData() {
    let data = JSON.parse(localStorage.getItem('U53r'));
    this.user = data;
  }

  logout() {
    this._authService.logout()
  }

}
