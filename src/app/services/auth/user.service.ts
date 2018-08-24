import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { config } from '../../../config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _http: Http
  ) {  }

  updateUserById(id, data) {
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this._http.put(config.API_URL + '/users/' + id, data, options);
  }
  
}
