import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user-btn',
  templateUrl: './user-btn.component.html',
  styleUrls: ['./user-btn.component.scss']
})
export class UserBtnComponent implements OnInit {

  @Input() view: string = 'full';
  @Input() class: string = 'normal';
  @Input() user: any;

  fullName: any;

  constructor() { }

  ngOnInit() {
    this.fullName = this.user.name + ' ' + this.user.lastname;
  }

}
