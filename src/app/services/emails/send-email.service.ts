import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { config } from '../../../config';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {
   constructor(
    private _http: Http
  ) { }
   contact(mail) {
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});
     let body = { 
      items: mail,
      mailer: {
        //to: 'mstiven013@gmail.com',
        to: config.email.me,
        cc: config.email.cc,
        from: mail.name + ' <' + mail.email + '>',
        subject: 'Amolca Colombia - Nueva petición de contacto',
        domain: config.email.domain
      }
    }
     return this._http.post(config.API_URL + '/forms', body, options);
  }
}