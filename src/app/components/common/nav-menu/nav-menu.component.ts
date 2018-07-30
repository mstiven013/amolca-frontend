import { Component, OnInit } from '@angular/core';
import { _MatSlideToggleMixinBase } from '../../../../../node_modules/@angular/material';

//Declare jQuery
declare var jQuery: any;

@Component({
  selector: 'nav-menu',
  templateUrl: './nav-menu.component.html'
})
export class NavMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //Login view
  loginView = 'icon';
  loginClass = 'view-mobile';

  //Test menu items
  menu = [
    {
      id: 1123123,
      name: 'Medicina', 
      link: 'medicina', 
      image: 'medicina.png', 
      state: true, 
      target: '_self', 
      submenu: {
        state: true,
        item: [
          { id: 123123, name: 'Anatomía', link: '/anatomia', image: 'anatomia.png', state: true, target: '_self' },
          { id: 323, name: 'Enfermería', link: '/enfermeria', image: 'enfermeria.png', state: true, target: '_self' },
          { id: 12312, name: 'Laboratorio', link: '/laboratorio', image: 'laboratorio.png', state: true, target: '_self' },
          { id: 2343, name: 'Ginecología', link: '/ginecologia', image: 'ginecologia.png', state: true, target: '_self' },
          { id: 5362, name: 'Anestesiología', link: '/anestesiologia', image: 'anestesiologia.png', state: true, target: '_self' },
          { id: 8927, name: 'Cardiología', link: '/cardiologia', image: 'cardiologia.png', state: true, target: '_self' },
          { id: 64380, name: 'Cirugía plástica', link: '/cirugia-plastica', image: 'cirugia-plastica.png', state: true, target: '_self' },
          { id: 91273, name: 'Pediatría', link: '/pediatria', image: 'pediatria.png', state: true, target: '_self' },
          { id: 38739, name: 'Imagenología', link: '/imagenologia', image: 'imagenologia.png', state: true, target: '_self' },
          { id: 632, name: 'Urología', link: '/urologia', image: 'urologia.png', state: true, target: '_self' },
          { id: 1246, name: 'Cirugía', link: '/cirugia', image: 'cirugia.png', state: true, target: '_self' },
          { id: 893, name: 'Neurología', link: '/neurologia', image: 'neurologia.png', state: true, target: '_self' },
          { id: 3246, name: 'Gastroenterología', link: '/gastroenterologia', image: 'gastroenterologia.png', state: true, target: '_self' },
          { id: 2346, name: 'Ortopedia', link: '/ortopedia', image: 'ortopedia.png', state: true, target: '_self' },
          { id: 75234, name: 'Medicina Estética', link: '/medicina-estetica', image: 'medicina-estetica.png', state: true, target: '_self' },
          { id: 1235, name: 'Medicina General', link: '/medicina-general', image: 'medicina-general.png', state: true, target: '_self' },
          { id: 4235, name: 'Oftalmología', link: '/oftalmologia', image: 'oftalmologia.png', state: true, target: '_self' },
          { id: 43276, name: 'Oncología', link: '/oncologia', image: 'oncologia.png', state: true, target: '_self' },
          { id: 548, name: 'Otorrinolaringología', link: '/otorrinolaringologia', image: 'otorrinolaringologia.png', state: true, target: '_self' },
          { id: 1252, name: 'Nefrología', link: '/nefrologia', image: 'nefrologia.png', state: true, target: '_self' },
          { id: 7942, name: 'Cirugía', link: '/cirugia-hearth', image: 'cirugia-hearth.png', state: true, target: '_self' },
          { id: 92738, name: 'Dermatología', link: '/dermatologia', image: 'dermatologia.png', state: true, target: '_self' },
          { id: 282, name: 'Fisioterapia', link: '/fisioterapia', image: 'fisioterapia.png', state: true, target: '_self' },
          { id: 23423, name: 'Patología', link: '/patologia', image: 'patologia.png', state: true, target: '_self' },
        ]
      }
    },
    {
      id: 72729, name: 'Odontología', link: 'odontologia', image: 'odontologia.png', state: true, target: '_self', submenu: ''
    },
    { 
      id: 27263, name: 'Biblioteca digital', link: 'medicina', image: 'biblioteca-digital.png', state: true, target: '_self', submenu: ''
    },
  ]

  //Mobile button function
  mobileMenu() {

    //Remove router link to parent item
    let parentItem = jQuery('.hmenu > li');
    parentItem.each(function() {
      if(jQuery(this).children('ul').length > 0) {
        jQuery(this).children('a').removeAttr('ng-reflect-router-link');
      }
    });

    let btn = document.getElementById('mobile-btn');
    let menu = document.getElementById('hmenu');

    //Button "add" & "remove" class
    if(btn.classList.contains('active')) {
      btn.classList.remove('active')
    } else {
      btn.classList.add('active')
    }

    //Menu "add" & "remove" class
    if(menu.classList.contains('active')) {
      menu.classList.remove('active')
    } else {
      menu.classList.add('active')
    }

  }

  //Show submenu's
  showSubmenuItem(id) {
    let submenuId = `#submenu-${id}`;
    if(submenuId) {
      jQuery(submenuId).slideToggle('slow');
    }
  }

  //Hidde mobile menu onclick action
  hiddeSubmenu() {
    let menu = document.getElementById('hmenu');
    if(menu.classList.contains('active')) {
      menu.classList.remove('active')
    }
  }

}
