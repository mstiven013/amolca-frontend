import { Component, OnInit, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { GetBookService } from '../../../services/book/get-book.service';
import { TooltipPosition } from '@angular/material';
import { CartService } from '../../../services/cart/cart.service';
import { GetCartService } from '../../../services/cart/get-cart.service';
import { NgxCarousel } from 'ngx-carousel';
import { BooksGlobalLoopComponent } from '../global-books-loop.component';

declare var jQuery: any;
declare var Materialize: any;

@Component({
  selector: 'books-loop',
  templateUrl: './books-loop.component.html',
  styleUrls: ['../books-loop.component.scss']
})
export class BooksLoopComponent extends BooksGlobalLoopComponent {

  ngOnChanges(changes: SimpleChanges) {
    this.initGetBooks();
  }

  ngOnInit() {
    this.getCountry();
    this.initGetBooks();
  }

   //Get books
   initGetBooks() {
    //If specialty is diffetent to "undefined"
    if(this.specialty !== undefined && this.specialty !== null) {
      
      this._getBookService.getBooksBySpecialty(this.specialty, this.orderBy, this.order, this.maxShowItems)
        .map(resp => resp.json())
        .subscribe(
          data => {
            if(data.length < 1) {
              let err = { status: 404 }
              this.mapErrors(err, 'especialidad')
            } else {
              this.setBooksInfo(data)
            }
          },
          err => this.mapErrors(err, 'especialidad')
        );

    } else if(this.author !== undefined && this.author !== null) {

      this._getBookService.getBooksByAuthor(this.author)
        .map(resp => resp.json())
        .subscribe(
          data => {
            if(data.length < 1) {
              let err = { status: 404 }
              this.mapErrors(err, 'autor')
            } else {
              this.setBooksInfo(data)
            }
          },
          err => this.mapErrors(err, 'autor')
        );

    } else {
      this._getBookService.getAllBooks()
        .map(resp => resp.json())
        .subscribe(
          data => {
            if(data.length < 1) {
              let err = { status: 404 }
              this.mapErrors(err, 'todos')
            } else {
              this.setBooksInfo(data)
            }
          },
          err => this.mapErrors(err, 'todos')
        );
    }
  }

}
