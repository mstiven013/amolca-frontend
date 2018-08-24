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
  aSection: string = 'desktop';

  constructor(
    private _appComponent: AppComponent,
    private _authService: AuthService
  ) { }

  //Watch when menu clicked to change menu
  onSectionChanged(section) {
    this.aSection = section;
  }

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
