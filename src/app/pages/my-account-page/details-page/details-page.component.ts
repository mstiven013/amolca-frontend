import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../../services/auth/user.service';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'details-account',
  templateUrl: './details-page.component.html',
  styleUrls: ['../my-account-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  @Input() user: any;

  userform: FormGroup;
  loader = { show: false, mode: 'indeterminate' }

  notification = { bg: 'red', show: false, msg: 'Ejemplo' }

  constructor(
    private _userService: UserService,
    private _authService: AuthService
  ) { }

  ngOnInit() {

    this.userform = new FormGroup({
      'name': new FormControl(this.user.name, [
                    Validators.required
                  ]),
      'lastname': new FormControl(this.user.lastname, [
                    Validators.required
                  ]),
      'email': new FormControl(this.user.email, [
                    Validators.required
                  ]),
      'phone': new FormControl(this.user.phone),
      'mobile': new FormControl(this.user.mobile)
    });
  }

  updateUser(frm) {
    this.loader.show = true;

    let me = this;
    this._userService.updateUserById(this.user._id, frm.value)
      .map(resp => resp.json())
      .subscribe(
        data => {
          this._authService.userDataRefresh(data);
          this.loader.show = false;
          this.user = data.user;
          this.notification.bg = '#00396F'
          this.notification.msg = 'Tus datos se han actualizado correctamente.';
          this.notification.show = true;

          setTimeout(function() {
            me.notification.show = false;
          }, 4000);
        },
        err => {
          this.loader.show = false;
          this.notification.bg = 'red';
          this.notification.msg = 'Ha ocurrido un error actualizando tus datos, por favor inténtelo de nuevo más tarde.';
          this.notification.show = true;

          setTimeout(function() {
            me.notification.show = false;
          }, 4000);
        }
      )
  }

}
