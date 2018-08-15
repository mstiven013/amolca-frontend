import { Component, OnInit, Input } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import { GetAuthorService } from '../../../services/author/get-author.service';

declare var jQuery: any;
declare var Materialize: any;

@Component({
  selector: 'authors-carousel',
  templateUrl: './authors-carousel.component.html',
  styleUrls: ['./authors-carousel.component.scss']
})
export class AuthorsCarouselComponent implements OnInit {

  //Ngx Carousel vars
  authorsCarousel: NgxCarousel;
  @Input() itemsPerRow: any = 4;

  //Custom vars
  authors: any = [];

  constructor(
    private _getAuthorService: GetAuthorService
  ) { }

  ngOnInit() {
    this.getAuthorsInfo();
    this.generateCarousel();
  }

  getAuthorsInfo() {
    this._getAuthorService.getAllAuthors()
      .map(resp => resp.json())
      .subscribe(
        data => { this.authors = data },
        err => { console.log(err.json()) }
      )
  }

  generateCarousel() {
    let me = this;
    this.authorsCarousel = {
      grid: {xs: 1, sm: 2, md: 2, lg: me.itemsPerRow, all: 0},
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    }
  }

  myfunc(event: Event) {
    //
  }

}
