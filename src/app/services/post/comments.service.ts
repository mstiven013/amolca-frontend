import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { config } from '../../../config';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(
    private _http: Http
  ) {  }

  //Get comments by post id
  getCommentsByPostId(post) {
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this._http.get(`${config.API_URL}/posts/${post}/comments`, options);
  }

  createComment(data) {
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this._http.post(`${config.API_URL}/comments`, data, options);
  }

}
