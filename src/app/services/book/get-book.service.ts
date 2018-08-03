import { Injectable } from '@angular/core';
import { Subject, Observable } from '../../../../node_modules/rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { config } from '../../../config';

@Injectable({
  providedIn: 'root'
})
export class GetBookService {

  constructor(
    private _http: Http
  ) {  }

  getAllBooks() {
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this._http.get(config.API_URL + '/books', options);
  }

  getBooksById(id) {
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this._http.get(`${config.API_URL}/books?searchby=id&id=${id}`, options);
  }

  getBooksBySlug(slug) {
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this._http.get(`${config.API_URL}/books?searchby=slug&slug=${slug}`, options);
  }

  getBooksByUser(id) {
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this._http.get(`${config.API_URL}/books?searchby=user&id=${id}`, options);
  }

  getBooksBySpecialty(specialty) {
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this._http.get(`${config.API_URL}/books?searchby=specialty&specialty=${specialty}`, options);
  }

  getBooksByAuthor(id) {
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this._http.get(`${config.API_URL}/books?searchby=author&id=${id}`, options);
  }

  getBooksByIsbn(isbn) {
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this._http.get(`${config.API_URL}/books?searchby=isbn&isbn=${isbn}`, options);
  }

  getBooksByInventoryState(state) {
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this._http.get(`${config.API_URL}/books?searchby=state&state=${state}`, options);
  }

  getBooksByPublication(year) {
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this._http.get(`${config.API_URL}/books?searchby=publication&year=${year}`, options);
  }

}
