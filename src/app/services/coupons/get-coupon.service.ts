import { Injectable } from '@angular/core';
import { Subject, Observable } from '../../../../node_modules/rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { config } from '../../../config';

@Injectable({
  providedIn: 'root'
})
export class GetCouponService {

  constructor(
    private _http: Http
  ) {  }

  getAllCoupons() {
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this._http.get(config.API_URL + '/coupons', options);
  }
}
