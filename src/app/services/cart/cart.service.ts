import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { config } from '../../../config';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private _http: Http
  ) { }

  createCart(cart) {
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this._http.post(config.API_URL + '/carts', cart, options);
  }

  updateCart(info, id) {
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this._http.put(config.API_URL + '/carts/' + id, info, options);
  }

}
