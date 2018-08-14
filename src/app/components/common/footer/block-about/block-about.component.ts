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
    { name: 'Amolca', link: 'amolca', state: true },
    { name: 'Novedades', link: 'novedades', state: true },
    { name: 'Eventos', link: 'eventos', state: true },
    { name: 'Términos y condiciones', link: 'terminos-y-condiciones', state: true },
    { name: 'Políticas de privacidad', link: 'politicas-de-privacidad', state: true }
  ]

}
