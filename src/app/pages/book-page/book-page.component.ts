import { Component, OnInit } from '@angular/core';
import { TooltipPosition } from '@angular/material';
import { GetBookService } from '../../services/book/get-book.service';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { AppComponent } from '../../app.component';
import { Meta } from '../../../../node_modules/@angular/platform-browser';

declare var jQuery: any;

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {

  //Declare position tooltip
  tooltipPositionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  tooltipPosition = this.tooltipPositionOptions[2];

  private sub: any;
  bookActive: any;
  book: any = {};
  exists = true;

  showCartBtn: Boolean = true;

  footerOffset: any = jQuery('.footer').offset().top - 40;

  constructor(
    //Meta info for this book
    private _appComponent: AppComponent,
    private _meta: Meta,

    //Book services
    private _getBookService: GetBookService,

    //Router services
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.sub = this._activatedRoute.params.subscribe(params => {
      this.bookActive = params['slug']
    })

    jQuery(document).ready(function() {
      jQuery('.materialboxed').materialbox();
    });

    this.scrollInteraction();
    this.getBookInfo(this.bookActive);
  }

  //Get Book info by SLUG
  getBookInfo(slug) {
    this._getBookService.getBooksBySlug(slug)
      .map(resp => resp.json())
      .subscribe(
        data => this.setBookInfoPage(data),
        err => this.exists = false
      )
  }

  //Set book info for page
  setBookInfoPage(b) {
    this.book = b;
    this._appComponent.setMetaTitle(this.book.name);
    this._meta.addTag({ name: "description", content: this.book.description });
  }

  scrollInteraction() {
    let me = this;
    jQuery(document).ready(function(){

      let imgCont = jQuery('#image-container');
      let start_pos = imgCont.offset().top;

      jQuery(window).scroll(function(){

        let end_pos = me.footerOffset - (imgCont.height() + 40);
        let scroll = jQuery(window).scrollTop();

        if(scroll >= start_pos - 140) {
          jQuery('#image-container .scroll-info').fadeIn();
        } else {
          jQuery('#image-container .scroll-info').fadeOut();
        }

        if (scroll >= start_pos - 140 && scroll <= end_pos) {
          imgCont.removeClass('scroll-waiting');
          imgCont.addClass('scroll-fixed');
        } else if(scroll > end_pos - 300) {
          imgCont.removeClass('scroll-fixed');
          imgCont.addClass('scroll-waiting');
        } else {
          imgCont.removeClass('scroll-waiting');
          imgCont.removeClass('scroll-fixed');
        }
      });

    });    
  }

  changeFooterOffsetTop() {
    this.footerOffset = jQuery('.footer').offset().top;
  }
}
