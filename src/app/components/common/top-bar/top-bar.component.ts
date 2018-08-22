import { Component, OnInit } from '@angular/core';
import { GetCartService } from '../../../services/cart/get-cart.service';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html'
})
export class TopBarComponent implements OnInit {

  constructor(
    private _getCartService: GetCartService,
    private _authService: AuthService
  ) { }

  //Social network's position
  socialPosition = 'top';

  //If user is logged
  userIsLogged: Boolean = false;
  userInfo: any;

  //Login btn view
  loginBtnView = 'full';

  //Cart btn view
  cartBtnView = 'full';
  cartValue = 0;

  ngOnInit() {
    //Get cart info
    this.getCartInfo();
    this.ifUserLoggedIn();

    //Watch changes in cart info
    this._getCartService.cartDataWatch()
      .subscribe( data => {
        this.getCartInfo();
      });

    this._authService.userDataWatch()
      .subscribe( data =>  {
        if(data != 'removed') {
          this.ifUserLoggedIn()
        } else {
          this.userIsLogged = false;
        }
      })
  }

  getCartInfo() {
    let cart = JSON.parse(localStorage.getItem('wyC4r7'));
    if(cart !== null) {
      let me = this;

      this.cartValue = cart.total;
    }
  }

  ifUserLoggedIn(){
    if(localStorage.getItem('U53r') != undefined && localStorage.getItem('U53r') != null) {
      this.userIsLogged = true;
      this.userInfo = JSON.parse(localStorage.getItem('U53r'));
    }
  }

}
