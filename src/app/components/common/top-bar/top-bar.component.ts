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
  showCart: Boolean = true;
  cartBtnView = 'full';
  cartValue = 0;
  dummy: Boolean = false;

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
          this.userInfo = data
          this.userIsLogged = true
        } else {
          this.userIsLogged = false;
        }
      })

    let me = this;
    setTimeout(function() {
      let aCountry = localStorage.getItem('C0uN7r1');
      if(aCountry === 'COLOMBIA') {
        me.showCart = true;
      }
    }, 500)
  }

  getCartInfo() {
    let cartInfo = localStorage.getItem('wyC4r7');
    
    if(cartInfo !== null) {
      let json_cart = JSON.parse(cartInfo);
      this._getCartService.getCartById(json_cart._id)
        .map(resp => resp.json())
        .subscribe(
          data => { 
            let me = this;
            this.cartValue = data.total;
          },
          err => { 
            console.log(err)
            this.cartValue = 0;
          }
        )
    } else {
      this.cartValue = 0;
    }
  }

  ifUserLoggedIn(){
    if(localStorage.getItem('U53r') != undefined && localStorage.getItem('U53r') != null) {
      this.userIsLogged = true;
      this.userInfo = JSON.parse(localStorage.getItem('U53r'));
    }
  }

}
