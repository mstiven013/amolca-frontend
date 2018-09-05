import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'report-error-form',
  templateUrl: './report-error-form.component.html',
  styleUrls: ['../comments.component.scss']
})
export class ReportErrorFormComponent implements OnInit {

  errorform: FormGroup;
  @Input() postId: string;
  loader = { show: false, bgColor: '#000', mode: 'indeterminate'};
  user = { name: '', email: '', mobile: '' };

  constructor() { }

  ngOnInit() {
    this.createFormGroup();
  }

  reportError(frm) {
    console.log(frm.value)
  }

  createFormGroup() {
    
    //Set user info
    if(localStorage.getItem('U53r') !== null && localStorage.getItem('U53r') !== undefined) {
      this.user = JSON.parse(localStorage.getItem('U53r'));
    } else {
      this.user.name = '';
      this.user.email = '';
      this.user.mobile = '';
    }

    //Generate comments form
    this.errorform = new FormGroup({
      'name': new FormControl(this.user.name, [
                  Validators.required
                ]),
      'email': new FormControl(this.user.email, [
                  Validators.required,
                  Validators.email
                ]),
      'phone': new FormControl(this.user.mobile, []),
      'content': new FormControl(null, [
                  Validators.required
                ]),
      'termsCondition': new FormControl(null, [
                  Validators.required
                ])
    });
  }

}
