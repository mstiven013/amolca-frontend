import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'login-btn',
  templateUrl: './login-btn.component.html',
  styleUrls: ['./login-btn.component.css']
})
export class LoginBtnComponent implements OnInit {

  @Input() view: string = 'full';
  @Input() class: string = 'normal';

  constructor() { }

  ngOnInit() {
    console.log(this.class);
  }

}
