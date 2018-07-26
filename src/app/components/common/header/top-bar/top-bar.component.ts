import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['../header.component.css']
})
export class TopBarComponent implements OnInit {

  constructor() { }

  //Social network's position
  socialPosition = 'top';

  //Login btn view
  loginBtnView = 'full';
  //Cart btn view
  cartBtnView = 'full';

  ngOnInit() {
  }

}
