import { Component, OnInit, Input } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { GetSlidersService } from 'src/app/services/sliders/get-sliders.service';

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
  loadBanner: Boolean = false;

  //Declare banner var
  slides: any;
  active: any = 0;

  //Expample vars
  slider = []

  constructor(
    private _getSlidersService: GetSlidersService
  ) { }

  ngOnInit() {
    this.getSliderInfo()
  }

  getSliderInfo() {
    this._getSlidersService.getAllSliders()
      .map(resp => resp.json())
      .subscribe(
        data => {
          this.slider = data[0].items;
          this.generateCarousel()
          this.loadBanner = true;
        },
        err => {
          console.log(err)
        }
      )
  }

  generateCarousel() {
    let me = this;
    this.banner = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      interval: {
        timing: 6000,
        initialDelay: 1000
      },
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
    this.active = event;
  }

}