import { Component, OnInit } from '@angular/core';
import { GetBookService } from '../../../services/book/get-book.service';
import { TooltipPosition } from '@angular/material';
import { CartService } from '../../../services/cart/cart.service';
import { GetCartService } from '../../../services/cart/get-cart.service';

declare var jQuery: any;
declare var Materialize: any;

@Component({
  selector: 'books-loop',
  templateUrl: './books-loop.component.html',
  styleUrls: ['./books-loop.component.scss']
})
export class BooksLoopComponent implements OnInit {

  //Declare variables
  books: any = [];

  //Declare position tooltip
  tooltipPositionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  tooltipPosition = this.tooltipPositionOptions[2];

  constructor(
    private _getBookService: GetBookService,
    private _CartService: CartService,
    private _getCartService: GetCartService
  ) { }

  ngOnInit() {
    this._getBookService.getAllBooks()
      .map(resp => resp.json())
      .subscribe(
        data => this.books = data,
        err => console.log(err)
      )
  }

  addToCart(book){

    let localCart = localStorage.getItem('wyC4r7');

    if(localCart !== null) {
      let product = {
        "id": book._id,
        "price": book.price,
        "quantity": 1
      }

      //Get Cart in localhost
      let uCart = JSON.parse(localCart);
      let push = true;

      //Run products in activeCart and add quantity to product
      for(let i = 0; i < uCart.products.length; i++) {
        if(uCart.products[i].id == book._id) {
          uCart.products[i].quantity = uCart.products[i].quantity + 1;
          push = false;
        }
      }

      //If the product no exists in the active cart from LocalStorage
      if(push) {
        uCart.products.push(product)
      }

      //Consume service for update Cart
      this._CartService.updateCart({"products": uCart.products}, uCart._id)
        .map(resp => resp.json())
        .subscribe(
          data => this._getCartService.cartDataRefresh(data),
          err => console.log(err)
        )

    } else {

      let data = {
        "products": [{ 
          "id": book._id, "price": book.price, "quantity": 1 }
        ]};

      this._CartService.createCart(data)
        .map(resp => resp.json())
        .subscribe(
          data => this._getCartService.cartDataRefresh(data),
          err => console.log(err)
        )
    }
  }

  addToWishlist(book) {
    console.log(book)
  }

}
