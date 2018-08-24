import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { config } from '../../../config';

@Injectable({
  providedIn: 'root'
})
export class GetSpecialtyService {

  constructor(
    private _http: Http
  ) {  }
  
  getSpecialtiesBySlug(slug) {
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this._http.get(`${config.API_URL}/specialties/slug/${slug}`, options);
  }
}
