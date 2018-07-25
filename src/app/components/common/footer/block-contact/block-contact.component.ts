import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer-block-contact',
  templateUrl: './block-contact.component.html',
  styleUrls: ['../footer.component.css']
})
export class BlockContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //Test info vars
  contact = [
    {name: 'direction', data: 'Calle 47 A # 81 - 58, Medellín, Antioquia, Colombia', state: true},
    {name: 'phone', data: '', state: false},
    {name: 'mobile', data: '+57 317 504 98 44', state: true},
    {name: 'email', data: 'gcomercial@amolca.com.co', state: true}
  ]

}
