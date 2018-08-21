import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { config } from '../../../config';

@Injectable({
  providedIn: 'root'
})
export class GetPostService {

  constructor(
    private _http: Http
  ) {  }
  
  getAllPosts() {
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this._http.get(config.API_URL + '/posts', options);
  }

  getPostsById(id) {
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this._http.get(`${config.API_URL}/posts/${id}`, options);
  }

  getPostsBySlug(slug) {
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this._http.get(`${config.API_URL}/posts/slug/${slug}`, options);
  }

  getPostsByUser(id) {
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this._http.get(`${config.API_URL}/users/${id}/posts`, options);
  }

  getPostsByState(state) {
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this._http.get(`${config.API_URL}/posts/state/${state}`, options);
  }

}
