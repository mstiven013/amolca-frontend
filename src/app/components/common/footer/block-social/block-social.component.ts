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
    {name: 'direction', data: 'Unicentro Plaza 36 Av. Abrham Lincoln y 27 de Febrero, Santo Domingo, República Dominicana', state: true},
    {name: 'phone', data: '', state: false},
    {name: 'mobile', data: '(1809) 5658732 – 3811043', state: true},
    {name: 'email', data: 'ventas@amolca.com.do', state: true}
  ]

}
