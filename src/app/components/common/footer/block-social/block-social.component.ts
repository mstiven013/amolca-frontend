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
    {name: 'direction', link: 'https://goo.gl/maps/v9MY5HiSin82', target: '_blank', data: 'El Cangrejo, Ave, Manuel E. Batista, Edificio Inca Local # 2, Ciudad de Panamá', state: true},
    {name: 'phone', link: '', target: '_self', data: '', state: false},
    {name: 'mobile', link: 'tel:5073966585', target: '_self', data: '(507) 3966585', state: true},
    {name: 'email', link: 'mailto:ventas@amolca.com.pa', target: '_self', data: 'ventas@amolca.com.pa', state: true}
  ]

}