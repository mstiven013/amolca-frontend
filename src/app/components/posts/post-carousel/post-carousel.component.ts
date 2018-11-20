import { Component, OnInit, Input } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { GetPostService } from '../../../services/post/get-post.service';
import { GlobalPostLoopComponent } from '../global-posts-loop.component';

declare var jQuery: any;
declare var Materialize: any;

@Component({
  selector: 'post-carousel',
  templateUrl: './post-carousel.component.html',
  styleUrls: ['../post-loop.component.scss']
})
export class PostCarouselComponent extends GlobalPostLoopComponent {

  //Ngx Carousel vars
  postsCarousel: NguCarouselConfig;
  @Input() itemsPerRow: any = 4;

  //Custom vars
  posts: any = [];

  ngOnInit() {
    this.getPostsInfo();
    this.generateCarousel();
    this.transformItemImageHeight();
  }

  generateCarousel() {
    let me = this;
    this.postsCarousel = {
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
