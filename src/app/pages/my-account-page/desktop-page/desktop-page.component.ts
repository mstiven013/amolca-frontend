import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'desktop-account',
  templateUrl: './desktop-page.component.html',
  styleUrls: ['../my-account-page.component.scss']
})
export class DesktopPageComponent implements OnInit {

  constructor(
    private _authService: AuthService
  ) { }

  @Input() user: any;
  @Output() sectionChanged = new EventEmitter<any>();

  ngOnInit() {
  }

  changeSectionTo(s) {
    this.sectionChanged.emit(s);
    console.log(s)
  }

  logout() {
    this._authService.logout()
  }

}
