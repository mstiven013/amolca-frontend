import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart/cart.service';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html'
})
export class TopBarComponent implements OnInit {

  constructor(
    private _cartService: CartService
  ) { }

  //Social network's position
  socialPosition = 'top';

  //Login btn view
  loginBtnView = 'full';

  //Cart btn view
  cartBtnView = 'full';
  cartValue = 0;

  ngOnInit() {
    //Get cart info
    this.getCartInfo();

    //Watch changes in cart info
    this._cartService.cartDataWatch()
      .subscribe( data => {
        this.getCartInfo();
      });
  }

  getCartInfo() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if(cart !== null) {
      let me = this;

      this.cartValue = 0;
      for(let i = 0; i < cart.products.length; i++) {
        me.cartValue += cart.products[i].price * cart.products[i].quantity;
      }
    }
  }

}
