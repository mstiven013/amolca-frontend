import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'account-menu',
  templateUrl: './account-menu.component.html',
  styleUrls: ['./account-menu.component.scss']
})
export class AccountMenuComponent implements OnInit {

  active: string; 

  constructor(
    private _authService: AuthService
  ) { }

  @Output() sectionChanged = new EventEmitter<any>();

  ngOnInit() {
  }

  changeSectionTo(s) {
    this.sectionChanged.emit(s);
    this.active = s;
  }

  logout() {
    this._authService.logout();
  }

}
