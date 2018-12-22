import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { config } from '../../../config';

@Injectable({
  providedIn: 'root'
})
export class GetOrdersService {

  constructor(
    private _http: Http
  ) {  }

  getOrdersById(id) {
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this._http.get(`${config.API_URL}/orders/${id}`, options);
  }

  getOrdersByUser(id) {
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this._http.get(`${config.API_URL}/users/${id}/orders`, options);
  }

  createOrder(order) {
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    let body = {
      order: order,
      country: {
        cc: config.email.cc,
        from: config.email.from,
        subject: config.email.subject,
        domain: config.email.domain
      }
    }

    return this._http.post(`${config.API_URL}/orders`, body, options);
  }

}