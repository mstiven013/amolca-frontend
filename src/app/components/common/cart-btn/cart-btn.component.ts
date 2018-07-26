import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cart-btn',
  templateUrl: './cart-btn.component.html',
  styleUrls: ['./cart-btn.component.css']
})
export class CartBtnComponent implements OnInit {

  constructor() { }

  @Input() view: string = 'full';

  ngOnInit() {
  }

}
