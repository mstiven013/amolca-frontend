import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { SendEmailService } from 'src/app/services/emails/send-email.service';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  showFormInfo: Boolean = false;
  contacform: FormGroup;
  btn = { text: 'Enviar formulario', enabled: true }
  user = { _id: '', name: '', lastname: '', phone: '', mobile: '', email: '', country: '' }
  loader = { show: false, bgColor: '#000', mode: 'indeterminate'};

  response = { show: false, class: 'success', msg: '<b>Tu correo se envió correctamente.</b><br/> En la mayor brevedad posible uno nuestros asesores se comunicará contigo.' }

  constructor(
    private _appComponent: AppComponent,
    private _sendEmailsService: SendEmailService
  ) { }

  ngOnInit() {

    window.scrollTo(0,0)

    this.loadUserData();

    //Set meta title
    this._appComponent.setMetaTitle('Contáctenos - Amolca Editorial Médica y Odontológica');

    this.showFormInfo = true;
  }

  loadUserData() {
    let data = localStorage.getItem('U53r');

    if(data !== null && data !== undefined) {
      this.user = JSON.parse(data)
    }

    this.createForm();
  }

  createForm() {
    this.contacform = new FormGroup({
      "name": new FormControl(this.user.name, [ Validators.required ]),
      "phone": new FormControl(this.user.mobile, [ Validators.required ]),
      "email": new FormControl(this.user.email, [ Validators.required ]),
      "city": new FormControl(null, [ Validators.required ]),
      "address": new FormControl(null, []),
      "subject": new FormControl(null, [ Validators.required ]),
      "message": new FormControl(null, [ Validators.required ]),
      'termsCondition': new FormControl([ Validators.required ])
    });
  }

  sendContact(frm) {
    //console.log(frm.value)

    this.loader.show = true;
    this.btn.enabled = false;

    let fields = {
      name: frm.value.name,
      phone: frm.value.phone,
      email: frm.value.email,
      city: frm.value.city,
      address: frm.value.address,
      subject: frm.value.subject,
      message: frm.value.message
    }

    this._sendEmailsService.contact(fields)
      .map(resp => resp.json())
      .subscribe(
        data => {
          console.log(data)

          this.loader.show = false;
          let me = this;
          this.response.msg = '<b>Tu correo se envió correctamente.</b><br/> En la mayor brevedad posible uno nuestros asesores se comunicará contigo.'
          this.response.class = 'success';
          this.response.show = true;
          this.contacform.reset();

          setTimeout(function() {
            me.response.show = false;
          }, 6000);
        },
        err => {
          console.log(err)

          this.loader.show = false;
          let me = this;
          this.response.msg = '<b>Ha ocurrido un error.</b><br/> Intentalo de nuevo más tarde.';
          this.response.class = 'error';
          this.response.show = true;

          setTimeout(function() {
            me.response.show = false;
          }, 6000);
        }
      )

  }

}  