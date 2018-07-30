import { Component, OnInit } from '@angular/core';
import { TooltipPosition } from '@angular/material';
import { CartService } from '../../services/cart/cart.service';
import { AppComponent } from '../../app.component';

//Declare jQuery
//import jQuery from 'jquery';
declare var jQuery: any;

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  constructor(
    private _cartService: CartService,
    private _appComponent: AppComponent
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
  }

  //Declare cart variable
  cart = { id: 0, user_id: 0, products: [] }

  //Get Cart Info
  getCartInfo() {
    let cartInfo = JSON.parse(localStorage.getItem('cart'));

    if(cartInfo !== null) {
      this.cart = cartInfo;
      this.changeTotalCart();
    }
  }

  //Change product Total
  changeTotalProduct(p, qty, i) {
    if(qty == 0) {
      this.cart.products.splice(i, 1);
      return false;
    }

    let product = this.cart.products.filter( product => product.id === p.id);
    product[0].quantity = qty;

    this.changeTotalCart();
  }

  //Delete product object from array
  deleteProduct(i) {
    this.cart.products.splice(i, 1);
    this.changeTotalCart();
  }

  //Change cart total
  changeTotalCart() {
    let me = this;

    //Change subtotal
    this.subtotalCart = 0;
    for(let i = 0; i < this.cart.products.length; i++) {
      me.subtotalCart += me.cart.products[i].price * me.cart.products[i].quantity;
    }

    //Change total cart
    this.totalCart = this.subtotalCart + this.shipping.price;

    this._cartService.cartDataRefresh(this.cart);

  }

  /* CART EXAMPLE */
  /*
  cart = {
    id: 1,
    user_id: 1,
    products: [
      { 
        id: 1, 
        name: 'Serie de Interpretación de Biopsias: Jonathan I. Epstein Interpretación de Biopsias de Tumores de Tejido Blando – Segunda edición', 
        image: 'interpretacion-de-bipsias.png', 
        price: 250000, 
        quantity: 1
      },
      { 
        id: 2, 
        name: 'Rehabilitación Neuro-Oclusal (RNO) Claves para el diagnóstico y el tratamiento', 
        image: 'rehabilitacion-neuro-oclusal.png', 
        price: 250000, 
        quantity: 2 
      }
    ]
  }
  */

  /*
  products = [
    { 
      author: ['Cyril Fisher', 'Elizabeth A. Montgomery', 'Khin Thway'],
      cover: 'Tapa dura de lujo, gofrado',
      edition: 'Año 2018',
      especialty: ['Medicina', 'Patologia'],
      format: '15,00 x 23,00 cm',
      isbn: '978-958-5426-82-5',
      name: 'Serie de Interpretación de Biopsias: Jonathan I. Epstein Interpretación de Biopsias de Tumores de Tejido Blando – Segunda edición',
      novelty_month: 8,
      novelty_year: 2018,
      pages: 606,
      printing: 'A todo color'
    }
  ]
  */

}
