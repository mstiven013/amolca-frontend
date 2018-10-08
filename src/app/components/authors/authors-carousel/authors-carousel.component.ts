import { Component, OnInit, Input } from '@angular/core';
import { GetAuthorService } from '../../../services/author/get-author.service';
import { NguCarouselConfig, NguCarousel } from '@ngu/carousel';

declare var jQuery: any;
declare var Materialize: any;

@Component({
  selector: 'authors-carousel',
  templateUrl: './authors-carousel.component.html',
  styleUrls: ['./authors-carousel.component.scss']
})
export class AuthorsCarouselComponent implements OnInit {

  //Ngu Carousel vars
  authorsCarousel: NguCarouselConfig;
  @Input() itemsPerRow: any = 4;
  @Input() maxItems: any = 12;
  @Input() orderBy: any = 'name';
  @Input() order: any = 1;

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
    console.log(this.maxItems)
    this._getAuthorService.getAllAuthors(this.orderBy, this.order, this.maxItems)
      .map(resp => resp.json())
      .subscribe(
        data => { 
          this.authors = data
          console.log(data)
         },
        err => { console.log(err.json()) }
      )
  }

  generateCarousel() {
    let me = this;
    this.authorsCarousel = {
      grid: {xs: 1, sm: 2, md: 2, lg: me.itemsPerRow, all: 0},
      slide: 1,
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

  myfunc(event: Event) {
    //
  }

}
