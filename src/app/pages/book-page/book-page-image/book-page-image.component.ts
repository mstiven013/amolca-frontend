import { Component, OnInit, Input, Output } from '@angular/core';
import { TooltipPosition } from '@angular/material';
import { GetBookService } from '../../../services/book/get-book.service';
import { ActivatedRoute, Router } from '../../../../../node_modules/@angular/router';
import { AppComponent } from '../../../app.component';
import { Meta } from '../../../../../node_modules/@angular/platform-browser';
import { GetCartService } from '../../../services/cart/get-cart.service';
import { CartService } from '../../../services/cart/cart.service';
import { FormControl } from '@angular/forms';

declare var jQuery: any;

@Component({
  selector: 'book-page-image',
  templateUrl: './book-page-image.component.html',
  styleUrls: ['../book-page.component.scss']
})
export class BookPageImageComponent {

    @Input() book: any = {};
    @Output() addCart;

}