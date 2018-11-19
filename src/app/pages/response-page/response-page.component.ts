import { Component, OnInit } from '@angular/core';
import { TooltipPosition } from '@angular/material';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { AppComponent } from '../../app.component';
import { Meta } from '../../../../node_modules/@angular/platform-browser';
import { GetCartService } from '../../services/cart/get-cart.service';
import { CartService } from '../../services/cart/cart.service';
import { FormControl } from '@angular/forms';

declare var jQuery: any;

@Component({
  selector: 'app-response-page',
  templateUrl: './response-page.component.html',
  styleUrls: ['./response-page.component.scss']
})
export class ResponsePageComponent implements OnInit {

    private sub: any;
    responseActive: any;
    response: any = {};
    exists = true;

    constructor(
        //Meta info for this response
        private _appComponent: AppComponent,
        private _meta: Meta,

        //Cart services
        private _getCartService: GetCartService,
        private _cartService: CartService,

        //Router services
        private _activatedRoute: ActivatedRoute,
        private _router: Router
    ) { }

    ngOnInit() {
        this.sub = this._activatedRoute.params.subscribe(params => {
            console.log(this._activatedRoute);
            console.log(params)
        })
    }
}