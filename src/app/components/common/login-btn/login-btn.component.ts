import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'login-btn',
  templateUrl: './login-btn.component.html',
  styleUrls: ['./login-btn.component.scss']
})
export class LoginBtnComponent implements OnInit {

  @Input() view: string = 'full';
  @Input() class: string = 'normal';

  constructor() { }

  ngOnInit() {
  }

}
