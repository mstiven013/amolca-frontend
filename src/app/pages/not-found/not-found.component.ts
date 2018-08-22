import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  @Input() pageType: any = 'normal';

  //Text vars
  text = {
    title: '404',
    button: 'Ir al Inicio',
    buttonBg: 'primary',
    buttonUrl: '/'
  }

  //Social network vars
  socialNetworks = { background: "blue", color: "white", position: "main" };

  constructor() { }

  ngOnInit() {
    this.validTextVars();

  }

  validTextVars() {
    switch (this.pageType) {
      case 'cart':
        this.text.title = 'No hay productos en el carrito.';
        this.text.button = 'Ir a la tienda';
        this.text.buttonUrl = '/tienda';
      break;

      default:
        this.text.title = 'La página que estás buscando no existe.';
        this.text.button = 'Ir al Inicio';
        this.text.buttonUrl = '/';
      break;
    }
  }

}
