import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'billing-form',
  templateUrl: './billing-form.component.html',
  styleUrls: ['./billing-form.component.scss']
})
export class BillingFormComponent implements OnInit {

  @Input() user: any;
  billingform: FormGroup;

  constructor() { }

  ngOnInit() {

    this.billingform = new FormGroup({
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

  updateBillingAddress(frm) {
    console.log(frm.value)
  }

}
