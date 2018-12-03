import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { GetBookService } from '../../../services/book/get-book.service';
import { TooltipPosition } from '@angular/material';
import { CartService } from '../../../services/cart/cart.service';
import { GetCartService } from '../../../services/cart/get-cart.service';
import { NguCarouselConfig } from '@ngu/carousel';
import { BooksGlobalLoopComponent } from '../global-books-loop.component';

@Component({
  selector: 'books-carousel',
  templateUrl: './books-carousel.component.html',
  styleUrls: ['../books-loop.component.scss']
})
export class BooksCarouselComponent extends BooksGlobalLoopComponent {

  public carouselOne: NguCarouselConfig;
  aCountry: any = 'PERU';

  ngOnChanges(changes: SimpleChanges) {
    this.getCountry();
    this.initGetBooks();
  }

  ngOnInit() {
    this.getCountry();
    this.initGetBooks();
    this.validateCarousel();
  }

  ngAfterViewInit() {
  }

  //Get books
  initGetBooks() {
    //If specialty is diffetent to "undefined"
    if(this.specialty !== undefined && this.specialty !== null) {
      
      this._getBookService.getBooksBySpecialty(this.specialty, this.orderBy, this.order, this.maxShowItems, 0)
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

  validateCarousel() {
    let me = this;
    this.carouselOne = {
      grid: {xs: 1, sm: 2, md: 2, lg: me.itemsPerRow, all: 0},
      slide: 1,
      interval: {
        timing: 3000,
        initialDelay: 1000
      },
      speed: 400,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    }
  }

}
