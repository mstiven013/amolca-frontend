import { Component, OnInit, Input } from '@angular/core';
import { TooltipPosition } from '@angular/material';
import { NgxCarousel } from 'ngx-carousel';

declare var jQuery: any;
declare var Materialize: any;

@Component({
  selector: 'app-authors-carousel',
  templateUrl: './authors-carousel.component.html',
  styleUrls: ['./authors-carousel.component.scss']
})
export class AuthorsCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
