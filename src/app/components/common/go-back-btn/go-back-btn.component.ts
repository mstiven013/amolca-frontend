import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TooltipPosition } from '@angular/material';
import { Location } from '@angular/common';
 @Component({
  selector: 'go-back-btn',
  templateUrl: './go-back-btn.component.html',
  styleUrls: ['./go-back-btn.component.scss']
})
export class GoBackBtnComponent implements OnInit {

  //Declare position tooltip
  tooltipPositionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  tooltipPosition = this.tooltipPositionOptions[4];

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
  }
  
  goBack() {
    window.scrollTo(0,0)
    this.location.back()
  }
 }