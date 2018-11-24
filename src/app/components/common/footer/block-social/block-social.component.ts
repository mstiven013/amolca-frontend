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
    {name: 'direction', data: 'Junín 827- Ciudad Autónoma de Buenos Aires', state: true},
    {name: 'phone', data: '', state: false},
    {name: 'mobile', data: '(54011) 4961-6506', state: true},
    {name: 'email', data: 'ventas@amolca.com.ar', state: true}
  ]

}
