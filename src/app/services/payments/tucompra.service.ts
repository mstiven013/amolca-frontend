import { Injectable, ModuleWithComponentFactories } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { config } from '../../../config';

declare var jQuery;

@Injectable({
  providedIn: 'root'
})
export class TuCompraService {

    //Defaults configuration
    defaults = {
        url: null,
        values: null,
        method: "POST",
        target: null,
        traditional: false,
        redirectTop: false
    };

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

    redirect(url, values, method?: any, target?:any, traditional?:any, redirectTop?:any) {
        var opts = url;
        if (typeof url !== "object") {
            opts = {
                url: url,
                values: values,
                method: method,
                target: target,
                traditional: traditional,
                redirectTop: redirectTop
            };
        }

        var config = jQuery.extend({}, this.defaults, opts);
        var generatedForm = this.getForm(config.url, config.values, config.method, config.target, config.traditional);
        jQuery('body', config.redirectTop ? window.top.document : undefined).append(generatedForm.form);
        generatedForm.submit();
        generatedForm.form.remove();
    }
    
    getForm(url, values, method, target, traditional) {
        method = (method && ["GET", "POST", "PUT", "DELETE"].indexOf(method.toUpperCase()) !== -1) ? method.toUpperCase() : 'POST';

        url = url.split("#");
        var hash = url[1] ? ("#" + url[1]) : "";
        url = url[0];

        if (!values) {
            var obj = this.parseUrl(url);
            url = obj.url;
            values = obj.params;
        }

        values = this.removeNulls(values);

        var form = jQuery('<form>')
            .attr("method", method)
            .attr("action", url + hash);


        if (target) {
            form.attr("target", target);
        }

        var submit = form[0].submit;
        this.iterateValues(values, [], form, null, traditional);

        return { form: form, submit: function () { submit.call(form[0]); } };
    }
    
    parseUrl = function (url) {

        if (url.indexOf('?') === -1) {
            return {
                url: url,
                params: {}
            };
        }
        var parts = url.split('?'),
        query_string = parts[1],
        elems = query_string.split('&');
        url = parts[0];

        var i, pair, obj = {};
        for (i = 0; i < elems.length; i += 1) {
            pair = elems[i].split('=');
            obj[pair[0]] = pair[1];
        }

        return {
            url: url,
            params: obj
        };
    };
    
    //Private Functions
    getInput(name, value, parent, array, traditional) {
        var parentString;
        if (parent.length > 0) {
            parentString = parent[0];
            var i;
            for (i = 1; i < parent.length; i += 1) {
                parentString += "[" + parent[i] + "]";
            }

            if (array) {
                if (traditional)
                    name = parentString;
                else
                    name = parentString + "[" + name + "]";
            } else {
                name = parentString + "[" + name + "]";
            }
        }

        return $("<input>").attr("type", "hidden")
            .attr("name", name)
            .attr("value", value);
    };

    iterateValues(values, parent, form, isArray, traditional) {
        let me = this;
        var i, iterateParent = [];
        Object.keys(values).forEach(function (i) {
            if (typeof values[i] === "object") {
                iterateParent = parent.slice();
                iterateParent.push(i);
                this.iterateValues(values[i], iterateParent, form, Array.isArray(values[i]), traditional);
            } else {
                form.append(me.getInput(i, values[i], parent, isArray, traditional));
            }
        });
    };
    
    removeNulls(values) {
        var propNames = Object.getOwnPropertyNames(values);
        for (var i = 0; i < propNames.length; i++) {
            var propName = propNames[i];
            if (values[propName] === null || values[propName] === undefined) {
                delete values[propName];
            } else if (typeof values[propName] === 'object') {
                values[propName] = this.removeNulls(values[propName]);
            } else if (values[propName].length < 1) {
                delete values[propName];
            }
        }
        return values;
    };

}
