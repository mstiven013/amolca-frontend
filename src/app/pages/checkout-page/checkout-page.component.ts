import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { country } from '../../../assets/data/country';
import { AppComponent } from '../../app.component';
import { GetCartService } from '../../services/cart/get-cart.service';

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

  //Declare shipping variable
  shipping = {
    name: 'Editorial Amolca',
    type: 'free',
    description: 'Envío gratuito a cualquier lugar de Colombia',
    price: 0
  };

  //Declare cart variable
  cart = { _id: 0, user_id: 0, products: [], coupon: [], total: 0 };
  cartExists: Boolean = true;

  constructor(
    private _appComponent: AppComponent,
    private _getCartService: GetCartService
  ) { }

  ngOnInit() {

    this.loadCartData();
    this.loadCountryData();
    this.loadUserData();
    this.generateCheckoutForm();

    //Set meta title
    this._appComponent.setMetaTitle('Finalizar compra - Amolca Editorial Médica y Odontológica');

  }

  //Create form
  generateCheckoutForm() {
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

  //Load countries data in select list of form
  loadCountryData() {
    for (let i = 0; i < country.length; i++) {
      let newObj = { id: country[i].code, text: country[i].name }
      this.countries.push(newObj);
    }
  }

  //Load user data from localStorage
  loadUserData() {
    let data = localStorage.getItem('U53r');

    if(data !== null && data !== undefined) {
      this.user = JSON.parse(data)
    } else {
      this.user = { name: null, lastname: null, phone: null, mobile: null, email: null, country: null }
    }
  }

  //Load cart data from localStorage
  loadCartData() {
    let cartInfo = JSON.parse(localStorage.getItem('wyC4r7'));
    console.log(cartInfo)

    if(cartInfo !== null) {
      this._getCartService.getCartById(cartInfo._id)
        .map(resp => resp.json())
        .subscribe(
          data => { this.cart = data; this.cartExists = true;},
          err => { console.log(err) }
        )
    } else {
      this.cartExists = false;
    }
  }

  //Send form
  createOrder(frm) {
    console.log(frm)
  }

}
