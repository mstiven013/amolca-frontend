import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { country } from '../../../assets/data/country';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {

  //Generate init variables
  checkoutform: FormGroup;
  user: any;
  countries: any = [];

  constructor(
    private _appComponent: AppComponent
  ) { }

  ngOnInit() {

    this.loadCountryData();
    this.loadUserData()

    //Set meta title
    this._appComponent.setMetaTitle('Finalizar compra - Amolca Editorial Médica y Odontológica');

    //Create form
    this.checkoutform = new FormGroup({
      'name': new FormControl(this.user.name, [ Validators.required ]),
      'lastname': new FormControl(this.user.lastname, [ Validators.required ]),
      'phone': new FormControl(this.user.phone),
      'mobile': new FormControl(this.user.mobile, [ Validators.required ]),
      'email': new FormControl(this.user.email, [ Validators.required, Validators.email ]),
      'country': new FormControl(null, [ Validators.required ]),
      'city': new FormControl(null, [ Validators.required ]),
      'address': new FormControl(null, [ Validators.required ]),
      'aditionals': new FormControl(null),
      'postalCode': new FormControl(null),
      'notes': new FormControl(null),
      'termsCondition': new FormControl(null, [ Validators.required ])
    });

  }

  loadCountryData() {
    for (let i = 0; i < country.length; i++) {
      let newObj = { id: country[i].code, text: country[i].name }
      this.countries.push(newObj);
    }
  }

  loadUserData() {
    let data = localStorage.getItem('U53r');

    if(data !== null && data !== undefined) {
      this.user = JSON.parse(data)
    } else {
      this.user = { name: null, lastname: null, phone: null, mobile: null, email: null, country: null }
    }
  }

  //Send form
  createOrder(frm) {
    console.log(frm)
  }

}
