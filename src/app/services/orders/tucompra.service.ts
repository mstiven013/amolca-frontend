import { Injectable, ModuleWithComponentFactories } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { config } from '../../../config';

@Injectable({
  providedIn: 'root'
})
export class TuCompraService {

    tuCompraUrl = 'https://demover3-1.tucompra.net/tc/app/inputs/compra.jsp';

    constructor(
        private _http: Http
    ) {  }

    sendOrder(id) {
        let headers = new Headers({'Content-type': 'text/html; charset=utf-8'});
        let options = new RequestOptions({headers: headers});
        
        let usuario = 'usuario=717';
        let factura = '&factura=121212';
        let valor = '&valor=100000';
        let descripcionFactura = '&descripcionFactura=Descripcion prueba';
        let tokenSeguridad = "&tokenSeguridad=4bef434dc8effd38e36a082a898a17d4";
        let documentoComprador = '&documentoComprador=111111';
        let tipoDocumento = '&tipoDocumento=CC';
        let nombreComprador = '&nombreComprador=' + id.name;
        let apellidoComprador = '&apellidoComprador=' + id.lastname;
        let correoComprador = '&correoComprador=' + id.email;

        let data = `?${usuario}${factura}${valor}${descripcionFactura}${tokenSeguridad}${documentoComprador}${tipoDocumento}${nombreComprador}${apellidoComprador}${correoComprador}`;

        return this._http.post(`${this.tuCompraUrl}${data}`, options);
    }

}
