import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { country } from '../../../assets/data/country';
import { AppComponent } from '../../app.component';
import { GetCartService } from '../../services/cart/get-cart.service';
import { TuCompraService } from 'src/app/services/payments/tucompra.service';
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
  countrySelected: any = 'Panamá';
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

    window.scrollTo(0,0)

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
    let cartId = localStorage.getItem('wyC4r7');

    if(cartId !== null) {
      let json_cart = JSON.parse(cartId);
      this._getCartService.getCartById(json_cart._id)
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
        name: frm.value.name,
        lastname: frm.value.lastname,
        email: frm.value.email,
        address: frm.value.address,
        country: this.countrySelected,
        state: frm.value.city,
        phone: frm.value.mobile,
        aditional: frm.value.aditionals
      },
      billing: {
        name: frm.value.name,
        lastname: frm.value.lastname,
        email: frm.value.email,
        address: frm.value.address,
        country: this.countrySelected,
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
      .map(resp => resp.json())
      .subscribe(
        data => {
          console.log(data)
          //this.tucomprapayment(data);
        },
        err => {
          console.log('error')
          console.log(err)
        }
      )
  }

  tucomprapayment(order) {

    this._getCartService.cartDataRefresh('removed')

    let descFactura = '';
    let productsTitles = [];

    for (let i = 0; i < order.cart[0].products.length; i++) {
      const element = order.cart[0].products[i].this.title;
      productsTitles.push(element);
    }

    descFactura = 'Compra de: ' + productsTitles.join(', ') + '.';

    let service = 'https://gateway2.tucompra.com.co/tc/app/inputs/compra.jsp';
    //let service = 'https://demover3-1.tucompra.net/tc/app/inputs/compra.jsp';
    
    this._tuCompraService.redirect(service, {'usuario': 'c57l7o3zx0l26u7t', 'factura': order._id, 'valor': order.cart[0].total, 'descripcionFactura': descFactura, 'nombreComprador': order.billing.name, 'apellidoComprador': order.billing.lastname, 'celularComprador': order.billing.phone, 'correoComprador': order.billing.email,  'ciudadComprador': order.billing.state, 'paisComprador': order.billing.country, 'direccionComprador': order.billing.address});

  }

}