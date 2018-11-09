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
    {name: 'direction', data: 'Carrera 43 #9 sur 195, Torre Inexmoda ofc 1334', state: true},
    {name: 'phone', data: '', state: false},
    {name: 'mobile', data: '+57 44797431', state: true},
    {name: 'email', data: 'contacto@amolca.com', state: true}
  ]

}
