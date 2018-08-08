import { Component, OnInit } from '@angular/core';
import { GetCartService } from '../../../services/cart/get-cart.service';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html'
})
export class TopBarComponent implements OnInit {

  constructor(
    private _getCartService: GetCartService
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
    this._getCartService.cartDataWatch()
      .subscribe( data => {
        this.getCartInfo();
      });
  }

  getCartInfo() {
    let cart = JSON.parse(localStorage.getItem('wyC4r7'));
    if(cart !== null) {
      let me = this;

      this.cartValue = cart.total;
    }
  }

}
