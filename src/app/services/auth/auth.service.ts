import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { config } from '../../../config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userData = new Subject<any>();

  constructor(
    private _Http: Http
  ) { }

  login(username, password) {

    let params = new URLSearchParams();
    params.append('username',username);
    params.append('password',password);
    params.append('grant_type','password');
    params.append('client_id',config.client_id);

    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Basic '+btoa(`${config.client_id}:${config.secret}`)});
    let options = new RequestOptions({headers: headers});

    return this._Http.post(config.API_URL + '/login', params.toString(), options);

  }

  //Observable to user data
  userDataWatch(): Observable<any> {
    return this.userData.asObservable();
  }

  //Refres user data
  userDataRefresh(data) {
    localStorage.setItem('4ccT0k3n', data.access_token);
    localStorage.setItem('U53r', JSON.stringify(data.user));
    this.userData.next(data.user);
  }
}
