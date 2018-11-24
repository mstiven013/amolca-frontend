import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer-block-social',
  templateUrl: './block-social.component.html',
  styleUrls: ['../footer.component.scss']
})
export class BlockSocialComponent implements OnInit {

  showInfo: Boolean = true;
  dummy: Boolean = false;

  constructor() { }

  ngOnInit() {
  }
  
  //Test info vars
  contact = [
    {name: 'direction', data: 'Jr. Inclán 312 Magdalena del Mar, Lima', state: true},
    {name: 'phone', data: '', state: false},
    {name: 'mobile', data: '(511) 2433161', state: true},
    {name: 'email', data: 'ventas@amolca.com.pe', state: true}
  ]

}
