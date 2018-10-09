import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { config } from '../../../config';

@Injectable({
  providedIn: 'root'
})
export class GetBookService {

  constructor(
    private _http: Http
  ) {  }

  getAllBooks({orderby='title', order='asc',limit=2}: {orderby?: string, order?: string, limit?: number}={}) {
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    let params = `orderby=${orderby}&order=${order}&limit=${limit}`;

    return this._http.get(config.API_URL + '/books?' + params, options);
  }

  getBooksById(id) {
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this._http.get(`${config.API_URL}/books/${id}`, options);
  }

  getBooksBySlug(slug) {
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this._http.get(`${config.API_URL}/books/slug/${slug}`, options);
  }

  getBooksByUser(id) {
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this._http.get(`${config.API_URL}/users/${id}/books`, options);
  }

  getBooksBySpecialty(specialty, orderby, order, limit) {
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    let params = `orderby=${orderby}&order=${order}&limit=${limit}`;

    return this._http.get(`${config.API_URL}/specialties/${specialty}/books?${params}`, options);
  }

  getBooksByAuthor(id) {
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this._http.get(`${config.API_URL}/authors/${id}/books`, options);
  }

  getBooksByIsbn(isbn) {
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this._http.get(`${config.API_URL}/books/isbn/${isbn}`, options);
  }

  getBooksByInventoryState(state) {
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this._http.get(`${config.API_URL}/books/state/${state}`, options);
  }

  getBooksByPublication(year) {
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this._http.get(`${config.API_URL}/books/publication/${year}`, options);
  }

}
