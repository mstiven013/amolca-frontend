import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer-block-about',
  templateUrl: './block-about.component.html',
  styleUrls: ['../footer.component.scss']
})
export class BlockAboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //Test about vars
  about = [
    { name: 'Amolca', link: 'amolca', state: 'disabled' },
    { name: 'Novedades',/* link: '#',*/ state: 'active' },
    { name: 'Eventos',/* link: '#',*/ state: 'active' },
    { name: 'Términos y condiciones', link: 'terminos-y-condiciones', state: 'active' },
    { name: 'Políticas de privacidad', link: 'terminos-y-condiciones', fragment: 'privacidad', state: 'active' }
  ]

}
