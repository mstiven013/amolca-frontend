import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { GetCartService } from '../../../services/cart/get-cart.service';

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
    private _getCartService: GetCartService,
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
    this.error.show = false;
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
    //No show loader
    this.loader.show = false;

    //Send user data to localstorage
    this._authService.userDataRefresh(data);

    //Get user cart and refresh this data
    this._getCartService.getCartByUser(data.user._id)
      .map(resp => resp.json())
      .subscribe(
        data => { 
          if(data.length > 0) {
            this._getCartService.cartDataRefresh(data[0])
          }
        },
        err => { console.log(err) }
      )

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

      case 403:
        this.error.show = true;
        this.error.msg = `El usuario y la contraseña no coinciden`;
      break;

      default:
          this.error.show = true;
          this.error.msg = `Ha ocurrido un error, por favor inténtelo de nuevo y si el error persiste por favor comuniquese con nosotros a info@amolca.com.`;
        break;
    }
  }

}
