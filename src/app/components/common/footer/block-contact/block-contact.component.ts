import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer-block-contact',
  templateUrl: './block-contact.component.html',
  styleUrls: ['../footer.component.scss']
})
export class BlockContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //Test info vars
  contact = [
    {name: 'direction', link: 'https://goo.gl/maps/TQntK7Afu7s', target: '_blank', data: 'Carrera 43 # 9 sur 195, Edificio Square<br/> Torre Inexmoda. Medellín, Colombia', state: true},
    {name: 'phone', link: '', target: '_self', data: '', state: false},
    {name: 'mobile', link: 'tel:5744797431', target: '_self', data: '(574) 4797431', state: true},
    {name: 'email', link: 'mailto:contacto@amolca.com', target: '_self', data: 'contacto@amolca.com', state: true}
  ]

}
