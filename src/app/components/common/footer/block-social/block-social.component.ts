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
    {name: 'direction', link: 'https://goo.gl/maps/vvVMgyNHwQP2', target: '_blank', data: 'Unicentro Plaza 36 Av. Abrham Lincoln y 27 de Febrero, Santo Domingo, República Dominicana', state: true},
    {name: 'phone', link: '', target: '_self', data: '', state: false},
    {name: 'mobile', link: 'tel:5658732', target: '_self',  data: '(1809) 5658732 – 3811043', state: true},
    {name: 'email', link: 'mailto:ventas@amolca.com.do', target: '_self', data: 'ventas@amolca.com.do', state: true}
  ]

}
