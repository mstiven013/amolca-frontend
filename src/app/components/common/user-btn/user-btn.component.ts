import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'user-btn',
  templateUrl: './user-btn.component.html',
  styleUrls: ['./user-btn.component.scss']
})
export class UserBtnComponent implements OnInit {

  @Input() view: string = 'full';
  @Input() class: string = 'normal';
  @Input() user: any;

  fullName: any;

  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit() {
    this.fullName = this.user.name + ' ' + this.user.lastname;

    this._authService.userDataWatch()
      .subscribe( data =>  {
          this.user = data
          this.fullName = this.user.name + ' ' + this.user.lastname;
      })
  }

  logout() {
    this._authService.logout()
  }

}
