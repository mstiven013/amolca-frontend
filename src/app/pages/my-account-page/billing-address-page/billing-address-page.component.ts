import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'billing-address-account',
  templateUrl: './billing-address-page.component.html',
  styleUrls: ['../my-account-page.component.scss']
})
export class BillingAddressPageComponent {

  @Input() user: any;

  loader = { show: false, mode: 'indeterminate' }
  notification = { bg: 'red', show: false, msg: 'Ejemplo' }

  constructor() { }

  ngOnInit() {
  }

}
