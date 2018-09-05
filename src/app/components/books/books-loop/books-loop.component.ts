import { Component, OnInit, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { GetBookService } from '../../../services/book/get-book.service';
import { TooltipPosition } from '@angular/material';
import { CartService } from '../../../services/cart/cart.service';
import { GetCartService } from '../../../services/cart/get-cart.service';
import { NgxCarousel } from 'ngx-carousel';

declare var jQuery: any;
declare var Materialize: any;

@Component({
  selector: 'books-loop',
  templateUrl: './books-loop.component.html',
  styleUrls: ['../books-loop.component.scss']
})
export class BooksLoopComponent implements OnInit {

  currentCountry: any;

  //Declare variables
  books: any = [];
  loopclass: any = 'books-loop';
  itemclass: any = 'item';
  error = { show: false, msg: '' }
  showBooks: Boolean = false;
  notification = { show: false, msg: 'Se agregó este libro a tu carrito' }
  loader = { show: true, bgColor: '#000', mode: 'indeterminate'};

  //Input vars
  @Input() specialty: any;
  @Input() author: any;
  @Input() carousel: Boolean = false;
  @Input() itemsPerRow: any = 0;

  //Declare position tooltip
  tooltipPositionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  tooltipPosition = this.tooltipPositionOptions[2];

  constructor(
    private _getBookService: GetBookService,
    private _cartService: CartService,
    private _getCartService: GetCartService
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    this.initGetBooks();
  }

  ngOnInit() {
    this.initGetBooks();
    this.getCountry();
  }

  getCountry() {
    let c = localStorage.getItem('C0uN7r1');
    this.currentCountry = c;
  }

  //Get books
  initGetBooks() {
    //If specialty is diffetent to "undefined"
    if(this.specialty !== undefined && this.specialty !== null) {
      
      this._getBookService.getBooksBySpecialty(this.specialty)
        .map(resp => resp.json())
        .subscribe(
          data => {
            this.setBooksInfo(data)
          },
          err => this.mapErrors(err, 'especialidad')
        );

    } else if(this.author !== undefined && this.author !== null) {

      this._getBookService.getBooksByAuthor(this.author)
        .map(resp => resp.json())
        .subscribe(
          data => {
            this.setBooksInfo(data) 
          },
          err => this.mapErrors(err, 'autor')
        );

    } else {
      this._getBookService.getAllBooks()
        .map(resp => resp.json())
        .subscribe(
          data => {
            this.setBooksInfo(data) 
          },
          err => this.mapErrors(err, 'todos')
        );
    }
  }

  //Function to set books info in all services
  setBooksInfo(data) {
    this.books = data;
    this.showBooks = true;
    this.error.show = false; 
  }

  //Function to error's map after login
  mapErrors(err, type) {
    switch (err.status) {
      case 404:
          this.error.show = true;

          //If message is for author
          if(type == 'todos') this.error.msg = `Lo sentimos pero en estos momentos no contamos con libros en stock.`;

          //If message is for specialty
          if(type == 'especialidad') this.error.msg = `Lo sentimos pero en estos momentos no contamos con libros de esta especialidad.`;

          //If message is for author
          if(type == 'autor') this.error.msg = `Lo sentimos pero en estos momentos no contamos con libros de este autor.`;

          break;

      default:
          this.error.show = true;
          this.error.msg = `Ha ocurrido un error, por favor inténtelo de nuevo.`;
        break;
    }
  }

  //Add to cart function
  addToCart(book, price){

    let localCart = localStorage.getItem('wyC4r7');

    if(localCart !== null) {
      //If exists cart in localStorage update this
      this.updateCartExistent(localCart, book, price)
    } else {
      //If not exists cart in localStorage create one new
      this.createCartIfNotExists(book, price)
    }
  }

  //If not exists cart in localStorage create one new
  createCartIfNotExists(book, price) {

    let user = localStorage.getItem('U53r');
    let dataCart: any;

    if(user !== null) {
      dataCart = {
        "products": [
          { "this": book._id, "price": price, "quantity": 1 }
        ],
        "userId": JSON.parse(user)._id
      }
    } else {
      dataCart = {
        "products": [{ 
          "this": book._id, "price": price, "quantity": 1 }
        ]};
    }
    
    this._cartService.createCart(dataCart)
      .map(resp => resp.json())
      .subscribe(
        data => { 
          //Refresh cart data
          this._getCartService.cartDataRefresh(data)

          //Notification
          let me = this;
          this.notification.show = true;
          setTimeout(function() {
            me.notification.show = false;
          }, 4000);

        },
        err => this.mapErrors(err, 'cart')
      )
  }

  //If exists cart in localStorage update this
  updateCartExistent(lCart, book, price) {
    let user = localStorage.getItem('U53r');

    let product = {
      "this": book._id,
      "price": price,
      "quantity": 1
    }

    //Get Cart in localhost
    let uCart = JSON.parse(lCart);

    //Run products in activeCart and add quantity to product
    let pExistent = uCart.products.filter(bEx => bEx.this._id === product.this);
    if(pExistent.length > 0) {
      pExistent[0].quantity = pExistent[0].quantity + 1;
    } else {
      uCart.products.push(product)
    }

    //If user exists in localStorage add "UserId" field into cart json
    if(user !== null) {
      uCart.userId = JSON.parse(user)._id;
    }

    //Consume service for update Cart
    this._cartService.updateCart({"products": uCart.products}, uCart._id)
      .map(resp => resp.json())
      .subscribe(
        data => { 
          //Refresh cart data
          this._getCartService.cartDataRefresh(data)

          //Notification
          let me = this;
          this.notification.show = true;
          setTimeout(function() {
            me.notification.show = false;
          }, 4000);

        },
        err => this.mapErrors(err, 'cart')
      )
  }

  addToWishlist(book) {
    console.log(book)
  }

  public myfunc(event: Event) {
    // carouselLoad will trigger this funnction when your load value reaches
    // it is helps to load the data by parts to increase the performance of the app
    // must use feature to all carousel
 }

}
