import { Component, OnInit, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { GetBookService } from '../../../services/book/get-book.service';
import { TooltipPosition } from '@angular/material';
import { CartService } from '../../../services/cart/cart.service';
import { GetCartService } from '../../../services/cart/get-cart.service';
import { BooksGlobalLoopComponent } from '../global-books-loop.component';

declare var jQuery: any;
declare var Materialize: any;

@Component({
  selector: 'books-loop',
  templateUrl: './books-loop.component.html',
  styleUrls: ['../books-loop.component.scss']
})
export class BooksLoopComponent extends BooksGlobalLoopComponent {

  aCountry: any;
  sub: any;
  totalBooks: Number;
  showLoaderMoreBooks: Boolean = false;

  ngOnChanges(changes: SimpleChanges) {

    this.sub = this._activatedRoute.queryParams.subscribe(params => {
      if(params['s'] !== undefined && params['s'] !== '') {
        if(this.data.length > 0) {
          this.books = this.data;
          this.showLoader = false;
          this.error.show = false;
          this.showBooks = true;
        } else {
          this.showLoader = false;
          this.error.msg = 'No se encontraron libros relacionados con la palabra: ' + params['s'];
          this.error.show = true;
        }
      } else {
        //this.initGetBooks();
      }
    });

  }

  ngOnInit() {

    this.sub = this._activatedRoute.queryParams.subscribe(params => {
      if(params['s'] !== undefined && params['s'] !== '') {
        if(this.data.length > 0) {
          this.books = this.data;
          this.showLoader = false;
          this.error.show = false;
          this.showBooks = true;
        } else {
          this.showLoader = false;
          this.error.msg = 'No se encontraron libros relacionados con la palabra: ' + params['s'];
          this.error.show = true;
        }
      } else {
        this.initGetBooks();
      }
    });

    this.getCountry();
  }

   //Get books
   initGetBooks() {
    //If specialty is diffetent to "undefined"
    if(this.specialty !== undefined && this.specialty !== null) {
      
      this._getBookService.getBooksBySpecialty(this.specialty, this.orderBy, this.order, this.maxShowItems, 0)
        .map(resp => resp.json())
        .subscribe(
          data => {
            if(data.books.length > 0) {
              this.setBooksInfo(data.books)
            } else {
              let err = { status: 404 }
              this.mapErrors(err, 'especialidad')
            }
          },
          err => {
            this.mapErrors(err, 'especialidad')
          }
        );

    } else if(this.author !== undefined && this.author !== null) {

      this._getBookService.getBooksByAuthor(this.author)
        .map(resp => resp.json())
        .subscribe(
          data => {
            if(data.length > 0) {
              this.setBooksInfo(data)
            } else {
              let err = { status: 404 }
              this.mapErrors(err, 'autor')
            }
          },
          err => this.mapErrors(err, 'autor')
        );

    } else {
      this._getBookService.getAllBooks()
        .map(resp => resp.json())
        .subscribe(
          data => {
            if(data.length > 0) {
              this.setBooksInfo(data)
            } else {
              let err = { status: 404 }
              this.mapErrors(err, 'todos')
            }
          },
          err => this.mapErrors(err, 'todos')
        );
    }
  }

  pageChanged(e: any) {
    window.scrollTo(0,0)
    let skip = e * this.itemsPerPage;
     if(skip == this.maxShowItems && skip <= this.totalBooks) {
      this.showLoaderMoreBooks = true;
       this._getBookService.getBooksBySpecialty(this.specialty, this.orderBy, this.order, this.maxShowItems, skip)
        .map(resp => resp.json())
        .subscribe(
          data => {
            if(data.books.length > 0) {
              data.books.forEach(el => {
                this.books.push(el);
              });
              this.maxShowItems = this.books.length
              this.totalBooks = data.count;
            } else {
              let err = { status: 404 }
              this.mapErrors(err, 'especialidad')
            }
            this.showLoaderMoreBooks = false;
          },
          err => {
            this.mapErrors(err, 'especialidad')
            this.showLoaderMoreBooks = false;
          }
        );
    }
  }

}
