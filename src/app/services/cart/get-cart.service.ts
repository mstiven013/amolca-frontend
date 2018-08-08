import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetCartService {

  constructor() { }

  private cartData = new Subject<any>();

  //Observable to cart data
  cartDataWatch(): Observable<any> {
    return this.cartData.asObservable();
  }

  //Refres cart data
  cartDataRefresh(cart) {
    localStorage.setItem('wyC4r7', JSON.stringify(cart));
    this.cartData.next(cart);
  }

}
