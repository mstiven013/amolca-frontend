import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { config } from '../../../config';

@Injectable({
  providedIn: 'root'
})
export class GetCartService {

  constructor(
    private _http: Http
  ) { }

  private cartData = new Subject<any>();

  //Get cart by ID
  getCartById(id) {
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this._http.get(config.API_URL + '/carts?searchby=id&id=' + id, options);
  }

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
