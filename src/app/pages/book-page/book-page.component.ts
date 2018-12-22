import { Component, OnInit } from '@angular/core';
import { TooltipPosition } from '@angular/material';
import { GetBookService } from '../../services/book/get-book.service';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { AppComponent } from '../../app.component';
import { Meta } from '../../../../node_modules/@angular/platform-browser';
import { GetCartService } from '../../services/cart/get-cart.service';
import { CartService } from '../../services/cart/cart.service';
import { FormControl } from '@angular/forms';
import { Location } from '@angular/common';

declare var jQuery: any;

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss']
})
export class BookPageComponent implements OnInit {

  //Declare current country
  currentCountry: any;

  //Declare position tooltip
  tooltipPositionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  tooltipPosition = this.tooltipPositionOptions[2];

  private sub: any;
  bookActive: any;
  book: any = {};
  exists = true;
  aCountry: any;

  related = { specialty: '', show: false };

  dummy: Boolean = false;

  //Cart btn vars
  showCartBtn: Boolean = true;
  qtyInput: Number = 1;

  //Notification
  notification = { show: false, class: 'inactive', msg: 'El libro se agregó correctamente a tu carrito' }
  loader = { show: true, bgColor: '#000', mode: 'indeterminate'};
  showPageLoader: Boolean = true;

  footerOffset: any = jQuery('.footer').offset().top - 40;
  mainHigher: Boolean = false;

  shared = {
    wpp: { msg: '' }
  }

  constructor(
    //Meta info for this book
    private _appComponent: AppComponent,
    private _meta: Meta,

    //Book services
    private _getBookService: GetBookService,

    //Cart services
    private _getCartService: GetCartService,
    private _cartService: CartService,

    //Router services
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _location: Location
  ) { }

  ngOnInit() {
    this.sub = this._activatedRoute.params.subscribe(params => {
      this.bookActive = params['slug']
      window.scrollTo(0,0)
      this.loader.show = true;
      this.showPageLoader = true;

      this.getCountry();

      this.getBookInfo(this.bookActive);
      this.ScrollInteraction();
    })

    this.ScrollInteraction();
  }

  ngAfterViewInit() {
    this.ScrollInteraction();
    jQuery(document).ready(function() {
      jQuery('.materialboxed').materialbox();
    });
  }

  getCountry() {
    let c = localStorage.getItem('C0uN7r1');
    this.currentCountry = 'ARGENTINA';
  }

  //Get Book info by SLUG
  getBookInfo(slug) {
    this._getBookService.getBooksBySlug(slug)
      .map(resp => resp.json())
      .subscribe(
        data => this.setBookInfoPage(data),
        err => this._router.navigate(['/'])
      )
  }

  //Set book info for page
  setBookInfoPage(b) {
    this.book = b;
    this.loader.show = false;
    this.showPageLoader = false;
    this.related.specialty = this.book.specialty[1]._id;
    this.related.show = true;

    //Set meta Title
    if(this.book.metaTitle && this.book.metaTitle !== '') {
      this._appComponent.setMetaTitle(this.book.metaTitle);
    } else {
      this._appComponent.setMetaTitle(this.book.title + ' - Amolca Editorial Médica y Odontológica');
    }

    //Set meta Description
    if(this.book.metaDescription && this.book.metaDescription !== '') {
      this._appComponent.setMetaDescription(this.book.metaDescription);
    } else {
      this._appComponent.setMetaDescription(this.book.description);
    }
  }

  collapsibleClosed() {
    let me = this;
    setTimeout(function(){
      me.ScrollInteractionFunction();
    }, 250)
  }

  changeFooterOffsetTop() {
    let me = this;
    setTimeout(function(){
      me.ScrollInteractionFunction();
    }, 250)
  }
  
  ScrollInteraction() {

    let me = this;
    //Function al hacer scroll
    jQuery(window).scroll(function() {
      me.ScrollInteractionFunction();
    });
  }
  
  ScrollInteractionFunction() {
    if(jQuery('.single-book').length > 0) {
      //Variables de distancias
      let DistanciaScroll = jQuery(window).scrollTop();
      let ContenedorPrincipal = jQuery('.single-book').offset().top;
      let LibrosRelacionados = jQuery('.related-products').offset().top;

      //Variables de altura
      let AlturaImagenFija = jQuery('.image-container.visible-img').height();
      let AlturaCabezote = jQuery('.header').height() + jQuery('.top-bar').height();
      let AlturaContenidoFijo = AlturaImagenFija + AlturaCabezote;
      let MaximoDeScroll = LibrosRelacionados - AlturaContenidoFijo - 40;

      if(DistanciaScroll < ContenedorPrincipal) {

        jQuery('.image-container.visible-img').css({
          opacity: 1,
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 'auto'
        }).removeClass('scroll-fixed').removeClass('scroll-waiting')

        jQuery('.scroll-info').fadeOut();
    
      } else if(DistanciaScroll > ContenedorPrincipal) {

        jQuery('.image-container.visible-img').css({
          opacity: 1,
          position: 'fixed',
          left: '5%',
          top: '160px',
          bottom: '0px'
        }).removeClass('scroll-waiting').addClass('scroll-fixed')

        jQuery('.scroll-info').fadeIn();
    
      }
      
    }
  }

  //Add to cart function
  addToCart(book, price, qty){

    let localCart = localStorage.getItem('wyC4r7');

    this.notification.class = 'inactive';
    this.notification.msg = `El libro <b>${book.title}</b> se agregó correctamente a tu carrito.`;
    
    if(localCart !== null) {
      //If exists cart in localStorage update this
      this.updateCartExistent(localCart, book, price, qty)
    } else {
      //If not exists cart in localStorage create one new
      this.createCartIfNotExists(book, price, qty)
    }
  }

  //If not exists cart in localStorage create one new
  createCartIfNotExists(book, price, qty) {

    let user = localStorage.getItem('U53r');
    let dataCart: any;

    if(user !== null) {
      dataCart = {
        "products": [
          { "this": book._id, "price": price, "quantity": qty }
        ],
        "userId": JSON.parse(user)._id
      }
    } else {
      dataCart = {
        "products": [{ 
          "this": book._id, "price": price, "quantity": qty }
        ]};
    }
    
    this._cartService.createCart(dataCart)
      .map(resp => resp.json())
      .subscribe(
        data => {
          this._getCartService.cartDataRefresh(data)

          //Input qty
          this.qtyInput = 1;

          //Notification
          let me = this;
          this.notification.class = 'active success';
          setTimeout(function(){
            me.notification.class = 'inactive';
          }, 4000);
        },
        err => {
          console.log(err)
          //Notification
          let me = this;
          this.notification.class = 'active error';
          this.notification.msg = `Ha ocurrido un error. Si el error persiste por favor comunicarse con diseno@webussines.com.`;

          setTimeout(function(){
            me.notification.class = 'inactive';
          }, 4000);
        }
      )
  }

  //If exists cart in localStorage update this
  updateCartExistent(lCart, book, price, qty) {
    let user = localStorage.getItem('U53r');

    let product = {
      "this": book._id,
      "price": price,
      "quantity": qty
    }

    //Get Cart in localhost
    let uCart = JSON.parse(lCart);

    //Run products in activeCart and add quantity to product
    let pExistent = uCart.products.filter(bEx => bEx.this._id === product.this);
    if(pExistent.length > 0) {
      pExistent[0].quantity = pExistent[0].quantity + qty;
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
          this._getCartService.cartDataRefresh(data)

          //Input qty
          this.qtyInput = 1;

          //Notification
          let me = this;
          this.notification.class = 'active success';
          setTimeout(function(){
            me.notification.class = 'inactive';
          }, 4000);
        },
        err => {
          console.log(err)
          //Notification
          let me = this;
          this.notification.class = 'active error';
          this.notification.msg = `Ha ocurrido un error. Si el error persiste por favor comunicarse con diseno@webussines.com.`;
          setTimeout(function(){
            me.notification.class = 'inactive';
          }, 4000);
        }
      )
  }
}
