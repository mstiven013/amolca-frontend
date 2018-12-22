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
    {name: 'direction', link: 'https://goo.gl/maps/fAhBrTPou122', target: '_blank', data: 'Junín 827- Ciudad Autónoma de Buenos Aires', state: true},
    {name: 'phone', link: '', target: '_self', data: '', state: false},
    {name: 'mobile', link: 'tel:5401149616506', target: '_self', data: '(54011) 4961-6506', state: true},
    {name: 'email', link: 'mailto:ventas@amolca.com.ar', target: '_self', data: 'ventas@amolca.com.ar', state: true}
  ]

}
