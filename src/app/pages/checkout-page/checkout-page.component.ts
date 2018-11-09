import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { country } from '../../../assets/data/country';
import { AppComponent } from '../../app.component';
import { GetCartService } from '../../services/cart/get-cart.service';
import { TuCompraService } from 'src/app/services/orders/tucompra.service';
import { GetOrdersService } from 'src/app/services/orders/get-orders.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {

  //Generate init variables
  showFormInfo = false;
  checkoutform: FormGroup;
  user = { _id: '', name: '', lastname: '', phone: '', mobile: '', email: '', country: '' }
  loadCountries: Boolean = false;
  countrySelected: any = 'Colombia';
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
    private _getCartService: GetCartService,
    private _tuCompraService: TuCompraService,
    private _getOrderService: GetOrdersService
  ) { }

  onChange(e) {
    this.countrySelected = e.value;
    this.checkoutform.value.country = e.value;
  }

  ngOnInit() {

    this.loadCartData();
    this.loadCountryData();
    this.loadUserData();

    //Set meta title
    this._appComponent.setMetaTitle('Finalizar compra - Amolca Editorial Médica y Odontológica');

    this.showFormInfo = true;
  }

  //Create form
  generateCheckoutForm() {
    this.checkoutform = new FormGroup({
      'name': new FormControl(this.user.name, [ Validators.required ]),
      'lastname': new FormControl(this.user.lastname, [ Validators.required ]),
      'phone': new FormControl(this.user.phone),
      'mobile': new FormControl(this.user.mobile, [ Validators.required ]),
      'email': new FormControl(this.user.email, [ Validators.required ]),
      'country': new FormControl(this.countrySelected, [ Validators.required ]),
      'city': new FormControl('', [ Validators.required ]),
      'address': new FormControl('', [ Validators.required ]),
      'aditionals': new FormControl('', []),
      'postalCode': new FormControl('', []),
      'notes': new FormControl('', []),
      'termsCondition': new FormControl([ Validators.required ])
    });
  }

  //Load countries data in select list of form
  loadCountryData() {
    for (let i = 0; i < country.length; i++) {
      let newObj = { id: country[i].name, text: country[i].name }
      this.countries.push(newObj);
    }
    this.loadCountries = true;
  }

  //Load user data from localStorage
  loadUserData() {
    let data = localStorage.getItem('U53r');

    if(data !== null && data !== undefined) {
      this.user = JSON.parse(data)
    }

    this.generateCheckoutForm();
  }

  //Load cart data from localStorage
  loadCartData() {
    let cartInfo = JSON.parse(localStorage.getItem('wyC4r7'));

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
  
    let order = {
      cart: [this.cart._id],
      shipping: {
        name: frm.value.name + frm.value.lastname,
        address: frm.value.address,
        country: frm.value.country,
        state: frm.value.city,
        phone: frm.value.mobile,
        aditional: frm.value.aditionals
      },
      billing: {
        name: frm.value.name + frm.value.lastname,
        address: frm.value.address,
        country: frm.value.country,
        state: frm.value.city,
        phone: frm.value.mobile,
        aditional: frm.value.aditionals
      },
      userId: null
    };

    if(this.user._id !== '') {
      order.userId = this.user._id;
    }

    this._getOrderService.createOrder(order)
      .subscribe(
        data => {
          console.log('melo')
          console.log(data)
          this._getCartService.cartDataRefresh('removed')
        },
        err => {
          console.log('error')
          console.log(err)
        }
      )
  }

}
