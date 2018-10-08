import { Component, OnInit, Input } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

declare var jQuery: any;

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styles: ['h2 { margin: 0px; }'],
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  //Ngx Carousel vars
  banner: NguCarouselConfig;

  //Declare banner var
  slides: any;

  //Expample vars
  pathImg = '/assets/img/banner/';
  slider = [
    { 
      image: "banner-example-01.jpg",
      bgAttach: "fixed",
      text: `<h2 style="color: #fff; text-align: center;">AMOLCA</h2><p style="color: #fff; text-align: center;">Banner de ejemplo #1</p>`,
      state: true
    },
    { 
      image: "banner-example-02.jpg",
      bgAttach: "initial",
      text: `<h2 style="color: #fff; text-align: center;">EDITORIAL MEDICA</h2><p style="color: #fff; text-align: center;">Editorial médica. Banner de ejemplo #2</p>`,
      state: true
    }  
  ]

  constructor() { }

  ngOnInit() {
    this.generateCarousel()
  }

  generateCarousel() {
    let me = this;
    this.banner = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      point: {
        visible: false,
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
