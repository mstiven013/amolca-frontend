import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.scss']
})
export class ShippingFormComponent implements OnInit {

  @Input() user: any;
  shippingform: FormGroup;

  constructor() { }

  ngOnInit() {

    this.shippingform = new FormGroup({
      'name': new FormControl(null),
      'lastname': new FormControl(null),
      'email': new FormControl(null),
      'address': new FormControl(null),
      'country': new FormControl(null),
      'state': new FormControl(null),
      'postalCode': new FormControl(null),
      'phone': new FormControl(null),
      'aditional': new FormControl(null)
    });

  }

  updateShippingAddress(frm) {
    console.log(frm.value)
  }

}
