import { Component, OnInit } from '@angular/core';
import { TooltipPosition } from '@angular/material';
import { GetCartService } from '../../services/cart/get-cart.service';
import { AppComponent } from '../../app.component';
import { CurrencyPipe } from '@angular/common';
import { ReplacePipe } from '../../pipes/currencyFormat';
import { AuthService } from '../../services/auth/auth.service';
import { CartService } from '../../services/cart/cart.service';

//Declare jQuery
//import jQuery from 'jquery';
declare var jQuery: any;
declare var Materialize: any;

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
  providers: [CurrencyPipe, ReplacePipe]
})
export class CartPageComponent implements OnInit {

  constructor(
    private _getCartService: GetCartService,
    private _CartService: CartService,
    private _appComponent: AppComponent,
    private _currencyPipe: CurrencyPipe,
    private _transformCurrencyPipe: ReplacePipe,
    private _authService: AuthService
  ) { }

  ngOnInit() {

    this._appComponent.setMetaTitle('Mi carrito de compras - Amolca');

    jQuery(document).ready(function() {
      jQuery('.materialboxed').materialbox();
    });

    this.getCartInfo();
  }

  //Declare position tooltip
  tooltipPositionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  tooltipPosition = this.tooltipPositionOptions[2];

  //Declare cart totals variables
  subtotalCart: any;
  totalCart: any;

  //Declare shipping variable
  shipping = {
    name: 'Editorial Amolca',
    type: 'free',
    description: 'Envío gratuito a cualquier lugar de Colombia',
    price: 0
  };

  showInfo = false;
  showNotFound = false;
  loader = { show: true, bgColor: '#000', mode: 'indeterminate'};

  //Declare cart variable
  cart = { _id: 0, user_id: 0, products: [], coupon: [], total: 0 };

  couponError = { state: false, text: '' };

  //Get Cart Info
  getCartInfo() {
    let cartInfo = localStorage.getItem('wyC4r7');
    
    if(cartInfo !== null) {
      let json_cart = JSON.parse(cartInfo);
      this._getCartService.getCartById(json_cart._id)
        .map(resp => resp.json())
        .subscribe(
          data => { 
            this.cart = data;
            this.loader.show = false;
            
            if(data.products.length > 0) {
              this.showInfo = true;
            } else {
              this.showNotFound = true;
            }
          },
          err => { 
            console.log(err)
            this.loader.show = false;
          }
        )
    } else {
      this.showNotFound = true;
    }
  }

  //Change product Total
  changeTotalBook(p, qty, i) {
    if(qty == 0) {
      this.cart.products.splice(i, 1);
      return false;
    }
    
    let product = this.cart.products.filter( product => product.id === p.id);
    product[0].quantity = parseInt(qty);

    let pUpdated = {products: this.cart.products};

    this.updateCartInfo(pUpdated, this.cart._id);
  }

  //Delete product object from array
  deleteProduct(i) {
    this.cart.products.splice(i, 1);
    let pUpdated = {products: this.cart.products};

    this.updateCartInfo(pUpdated, this.cart._id);
    //this.changeTotalCart();
  }

  //Change cart total
  updateCartInfo(info, id) {

    this._CartService.updateCart(info, id)
      .map(resp => resp.json())
      .subscribe(
        data => {
          this.cart = data
          this._getCartService.cartDataRefresh(this.cart)
        },
        err => console.log(err)
      );
      
  }

  validateCoupons() {

    if(this.cart.coupon.length > 0) {

      let flag = true;
      let c = this.cart.coupon[0];
      let discount = 0;

      //If coupon is valid for "ALL PRODUCTS"
      if(c.restrictions.validFor == 'ALL_PRODUCTS') {

        //If coupon is a "PERCENTAGE" type
        if(c.method == 'PERCENTAGE') {
          discount = (c.discount / 100) * this.subtotalCart;
        }
      }

      if(flag) {
        let newTotal = this.subtotalCart - discount;
        this.totalCart = newTotal;
      }

    }

  }

  //Discount coupons
  applyCoupon(code) {

      let c = this.cart.coupon[0];
      let discount = 0;

      //If code is empty no action  
      if(code == '' || code == ' ') return this.couponError.state = false;

      //If code not exists
      if(code !== c.code) return this.couponError = {state: true, text: 'El cupón que ingresaste, no existe.'}

      //Return if subTotal < minPurchase
      if(c.restrictions.minPurchase > this.subtotalCart) {
        let min = this._currencyPipe.transform(c.restrictions.minPurchase, 'COP','symbol-narrow','4.0-1');

        //return coupon error
        return this.couponError = { state: true, text: `Debes comprar al menos ${this._transformCurrencyPipe.transform(min, ',', '.')} para hacer efectivo el descuento.` }
      }

      //If coupon is valid for "ALL PRODUCTS"
      if(c.restrictions.validFor == 'ALL_PRODUCTS') {

        //If coupon is a "PERCENTAGE" type
        if(c.method == 'PERCENTAGE') {
          discount = (c.discount / 100) * this.subtotalCart;
        }
      }

  }

}
