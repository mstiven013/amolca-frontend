import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  //Declare register form variables
  registerform: FormGroup;
  error = { show: false, msg: '' };
  regitserdata = { name: '', lastname: '', email: '', pass: '', repassword: '' };

  success = {
    show: false,
    title: 'Registro exitoso',
    msg: `
      Te has registrado exitosamente.<br/>
      Te damos la bienvenida a <b>Amolca</b>.<br/><br/>
      <i>En un momento serás redireccionado a tu cuenta.</i>
    `,
    state: true
  }

  //Declare loader var
  loader = { show: false, mode: 'indeterminate'};

  constructor(
    private _router: Router,
    private _authService: AuthService,
    private _appComponent: AppComponent
  ) { }

  ngOnInit() {
    this.initRegisterForm();    
  }

  //Init register form
  initRegisterForm() {
    this.registerform = new FormGroup({
      'name': new FormControl(null, [
                    Validators.required
                  ]),
      'lastname': new FormControl(null, [
                    Validators.required
                  ]),
      'email': new FormControl(null, [
                    Validators.email,
                    Validators.required
                  ]),
      'password': new FormControl(null, [
                    Validators.required
                  ]),
      'repassword': new FormControl(null, [
                    Validators.required
                  ]),
      'termsCondition': new FormControl(null, [
                    Validators.required
                  ])
    }, this.passwordValidation);
  }

  register(frm) {

    this.loader.show = true;
    this.regitserdata.email = frm.value.email;

    this._authService.register(frm.value)
      .map(resp => resp.json())
      .subscribe(
        data => { this.signUp(data) },
        err => { this.mapErrors(err.json()) }
      )   
  }

  signUp(data) {

    let me = this;

    this.loader.show = false;
    this._authService.userDataRefresh(data);

    this.success.show = true;

    setTimeout(function() {
      me._router.navigate(['mi-cuenta']);
    }, 4000);
  }

  //Function to error's map after login
  mapErrors(err) {

    this.loader.show = false;
    //Validate err
    switch (err.status) {
      case 409:
        this.error.show = true;
        this.error.msg = `El usuario "${this.regitserdata.email}" ya existe`;
      break;

      case 500:
        this.error.show = true;
        this.error.msg = `Ha ocurrido un error, por favor inténtelo de nuevo.`;
      break;

      case 0:
          this.error.show = true;
          this.error.msg = `Ha ocurrido un error, por favor inténtelo de nuevo y si el error persiste, comuniquese con nosotros.`;
        break;
    }

  }

  //Password's mismatch
  passwordValidation(frm: FormGroup) {
    return frm.get('password').value === frm.get('repassword').value ? null : {'mismatch': true};
  }

}
