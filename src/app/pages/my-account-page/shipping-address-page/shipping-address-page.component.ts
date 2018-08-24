import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shipping-address-account',
  templateUrl: './shipping-address-page.component.html',
  styleUrls: ['../my-account-page.component.scss']
})
export class ShippingAddressPageComponent {

  @Input() user: any;

  loader = { show: false, mode: 'indeterminate' }
  notification = { bg: 'red', show: false, msg: 'Ejemplo' }

  constructor() { }

  ngOnInit() {
  }

}
