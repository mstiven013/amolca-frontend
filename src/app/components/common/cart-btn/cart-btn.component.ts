import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cart-btn',
  templateUrl: './cart-btn.component.html',
  styleUrls: ['./cart-btn.component.scss']
})
export class CartBtnComponent implements OnInit {

  constructor() { }

  @Input() view: string = 'full';
  @Input() value: number = 0;

  ngOnInit() {
  }

}
