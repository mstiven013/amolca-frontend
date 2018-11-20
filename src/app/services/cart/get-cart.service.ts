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

    return this._http.get(config.API_URL + '/carts/' + id, options);
  }

  //Get cart by User Id
  getCartByUser(id) {
    let token = localStorage.getItem('4ccT0k3n');

    let headers = new Headers({'Content-type': 'application/json', 'Authorization': 'Bearer '+ token });
    let options = new RequestOptions({headers: headers});

    return this._http.get(config.API_URL + '/users/' + id + '/carts', options);
  }

  //Observable to cart data
  cartDataWatch(): Observable<any> {
    return this.cartData.asObservable();
  }

  //Refres cart data
  cartDataRefresh(cart) {
    if(cart == 'removed') {
      localStorage.removeItem('wyC4r7');
    } else {
      localStorage.setItem('wyC4r7', JSON.stringify(cart));
    }
    this.cartData.next(cart);
  }

}
