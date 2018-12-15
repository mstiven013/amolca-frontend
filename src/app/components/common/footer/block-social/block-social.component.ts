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
    {name: 'direction', link: 'https://goo.gl/maps/sxdExAHMa7q', target: '_blank', data: 'Calle 47 A # 81-58, Medellín, Antioquia, Colombia', state: true},
    {name: 'phone', link: '', target: '_self', data: '', state: false},
    {name: 'mobile', link: 'tel:573175049844', target: '_self', data: '+57 3175049844', state: true},
    {name: 'email', link: 'mailto:gcomercial@amolca.com.co', target: '_self', data: 'gcomercial@amolca.com.co', state: true}
  ]

}
