import { Component, OnInit, Input } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { GetPostService } from '../../../services/post/get-post.service';

declare var jQuery: any;
declare var Materialize: any;

@Component({
  selector: 'post-carousel',
  templateUrl: './post-carousel.component.html',
  styleUrls: ['../post-loop.component.scss']
})
export class PostCarouselComponent implements OnInit {

  //Ngx Carousel vars
  postsCarousel: NguCarouselConfig;
  @Input() itemsPerRow: any = 4;

  //Custom vars
  posts: any = [];

  constructor(
    private _getPostService: GetPostService
  ) { }

  ngOnInit() {
    this.getPostsInfo();
    this.generateCarousel();
    this.transformItemImageHeight();
  }

  ngAfterViewInit() {
  }

  getPostsInfo() {
    this._getPostService.getAllPosts()
      .map(resp => resp.json())
      .subscribe(
        data => { this.posts = data;},
        err => { console.log(err.json()) }
      )
  }

  generateCarousel() {
    let me = this;
    this.postsCarousel = {
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

  transformItemImageHeight() {
    jQuery(document).ready(function() {
      jQuery('.image-container').each(function() {
        jQuery(this).css('height', jQuery(this).width())
      })
    })
  }

  myfunc(event: Event) {
    //
  }

}
