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
    {name: 'direction', link: 'https://goo.gl/maps/MX1F8vSqRhy', target: '_blank', data: 'Jr. Inclán 312 Magdalena del Mar, Lima', state: true},
    {name: 'phone', link: '', target: '_self', data: '', state: false},
    {name: 'mobile', link: 'tel:5112433161', target: '_self',  data: '(511) 2433161', state: true},
    {name: 'email', link: 'mailto:ventas@amolca.com.pe', target: '_self', data: 'ventas@amolca.com.pe', state: true}
  ]

}
