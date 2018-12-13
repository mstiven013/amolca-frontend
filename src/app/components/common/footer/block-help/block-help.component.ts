import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer-block-help',
  templateUrl: './block-help.component.html',
  styleUrls: ['../footer.component.scss']
})
export class BlockHelpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //Test help vars
  help = [
    { name: '¿Cómo comprar?', /*link: 'como-comprar',*/ state: 'active' },
    { name: 'Preguntas frecuentes', /*link: 'preguntas-frecuentes',*/ state: 'active' },
    { name: 'Información de envío', link: 'terminos-y-condiciones', fragment: 'envios', state: 'active' },
    { name: 'Medios de pago', link: 'terminos-y-condiciones', fragment: 'pagos', state: 'active' },
    { name: 'Contacto', link: 'contacto', state: 'active' }
  ]

}
