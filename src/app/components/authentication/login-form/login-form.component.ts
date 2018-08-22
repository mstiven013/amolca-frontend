import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginform: FormGroup;
  error = { show: false, msg: '' }
  logindata = { user: '', pass: '' }
  loader = { show: false, bgColor: '#000', mode: 'indeterminate'};

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.loginform = new FormGroup({
      'user': new FormControl(null, [
                Validators.email,
                Validators.required
              ]),
      'pass': new FormControl(null, [
                Validators.required
              ]) 
    });
  }

  //Function to login
  login(form) {
    this.loader.show = true;

    this.logindata.user = form.value.user;
    
    this._authService.login(form.value.user, form.value.pass)
      .map(resp => resp.json())
      .subscribe(
        data => { this.signIn(data) },
        err => { this.mapErrors(err.json()) }
      )
  }

  //Sing in function after login
  signIn(data) {
    this.loader.show = false;
    this._authService.userDataRefresh(data);
    this._router.navigate(['mi-cuenta']);
  }

  //Function to error's map after login
  mapErrors(err) {
    this.loader.show = false;
    switch (err.status) {
      case 404:
          this.error.show = true;
          this.error.msg = `El usuario ${this.logindata.user} no existe`;
        break;

      case 0:
          this.error.show = true;
          this.error.msg = `Ha ocurrido un error, por favor inténtelo de nuevo.`;
        break;
    }
  }

}
