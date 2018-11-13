import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { config } from '../../../config';

@Injectable({
  providedIn: 'root'
})
export class GetAuthorService {

  constructor(
    private _http: Http
  ) {  }

  getAllAuthors(orderby?: string, order?: string, limit?: number) {
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    let params = `orderby=${orderby}&order=${order}&limit=${limit}`;

    return this._http.get(config.API_URL + '/authors?' + params, options);
  }

  getAuthorsById(id) {
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this._http.get(`${config.API_URL}/authors/${id}`, options);
  }

  getAuthorsBySlug(slug) {
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this._http.get(`${config.API_URL}/authors/slug/${slug}`, options);
  }

}