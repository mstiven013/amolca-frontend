import { Injectable } from '@angular/core';
import { Subject, Observable } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private cartData = new Subject<any>();

  //Observable to cart data
  cartDataWatch(): Observable<any> {
    return this.cartData.asObservable();
  }

  //Refres cart data
  cartDataRefresh(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    this.cartData.next(cart);
  }

}
