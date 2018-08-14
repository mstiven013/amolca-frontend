import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cart-totals',
  templateUrl: './cart-totals.component.html',
  styleUrls: ['./cart-totals.component.scss']
})
export class CartTotalsComponent implements OnInit {

  @Input() subtotal: any;
  @Input() shipping: any;
  @Input() total: any;

  constructor() { }

  ngOnInit() {
  }

}
