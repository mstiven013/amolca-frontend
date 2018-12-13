import { Component, OnInit } from '@angular/core';
import { _MatSlideToggleMixinBase } from '@angular/material';

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
          { id: 5362, name: 'Anestesiología', link: '/anestesiologia', image: 'anestesiologia.png', state: true, target: '_self' },
          { id: 8927, name: 'Cardiología', link: '/cardiologia', image: 'cardiologia.png', state: true, target: '_self' },
          { id: 1246, name: 'Cirugía', link: '/cirugia', image: 'cirugia.png', state: true, target: '_self' },
          { id: 64380, name: 'Cirugía plástica', link: '/cirugia-plastica', image: 'cirugia-plastica.png', state: true, target: '_self' },
          { id: 7942, name: 'Cirugía vascular', link: '/cirugia-vascular', image: 'cirugia-vascular.png', state: true, target: '_self' },
          { id: 92738, name: 'Dermatología', link: '/dermatologia', image: 'dermatologia.png', state: true, target: '_self' },
          //{ id: 7363, name: 'Emergencias', link: '/emergencias', image: 'emergencias.png', state: true, target: '_self' },
          { id: 323, name: 'Enfermería', link: '/enfermeria', image: 'enfermeria.png', state: true, target: '_self' },
          { id: 282, name: 'Fisioterapia', link: '/fisioterapia', image: 'fisioterapia.png', state: true, target: '_self' },
          { id: 3246, name: 'Gastroenterología', link: '/gastroenterologia', image: 'gastroenterologia.png', state: true, target: '_self' },
          { id: 2343, name: 'Ginecología y obstetricia', link: '/ginecologia', image: 'ginecologia.png', state: true, target: '_self' },
          { id: 38739, name: 'Imagenología', link: '/imagenologia', image: 'imagenologia.png', state: true, target: '_self' },
          { id: 12312, name: 'Laboratorio', link: '/laboratorio', image: 'laboratorio.png', state: true, target: '_self' },
          { id: 75234, name: 'Medicina Estética', link: '/medicina-estetica', image: 'medicina-estetica.png', state: true, target: '_self' },
          { id: 1235, name: 'Medicina General', link: '/medicina-general', image: 'medicina-general.png', state: true, target: '_self' },
          { id: 1252, name: 'Nefrología', link: '/nefrologia', image: 'nefrologia.png', state: true, target: '_self' },
          { id: 8334, name: 'Neurocirugia', link: '/neurocirugia', image: 'neurocirugia.png', state: true, target: '_self' },
          { id: 893, name: 'Neurología', link: '/neurologia', image: 'neurologia.png', state: true, target: '_self' },
          //{ id: 2326, name: 'Obstetricia', link: '/obstetricia', image: 'obstetricia.png', state: true, target: '_self' },
          { id: 4235, name: 'Oftalmología', link: '/oftalmologia', image: 'oftalmologia.png', state: true, target: '_self' },
          { id: 43276, name: 'Oncología', link: '/oncologia', image: 'oncologia.png', state: true, target: '_self' },
          { id: 2346, name: 'Ortopedia', link: '/ortopedia', image: 'ortopedia.png', state: true, target: '_self' },
          { id: 548, name: 'Otorrinolaringología', link: '/otorrinolaringologia', image: 'otorrinolaringologia.png', state: true, target: '_self' },
          { id: 23423, name: 'Patología', link: '/patologia', image: 'patologia.png', state: true, target: '_self' },	
          { id: 91273, name: 'Pediatría', link: '/pediatria', image: 'pediatria.png', state: true, target: '_self' },
          { id: 632, name: 'Urología', link: '/urologia', image: 'urologia.png', state: true, target: '_self' },
        ]
      }
    },
    {
      id: 72729,
      name: 'Odontología',
      link: 'odontologia',
      image: 'odontologia.png',
      state: true,
      target: '_self',
      submenu: {
        state: true,
        item: [
          //{ id: 56382, name: 'Cirugía Oral', link: '/cirugia-oral', image: 'cirugia-oral.png', state: true, target: '_self' },
          { id: 32423, name: 'Cirugía Oral y Maxilofacial', link: '/cirugia-oral-y-maxilofacial', image: 'cirugia-oral-y-maxilofacial.png', state: true, target: '_self' },
          { id: 34321, name: 'Endodoncia', link: '/endodoncia', image: 'endodoncia.png', state: true, target: '_self' },
          { id: 92726, name: 'Estética dental', link: '/estetica-dental', image: 'estetica-dental.png', state: true, target: '_self' },
          { id: 24687, name: 'Implantología', link: '/implantologia', image: 'implantologia.png', state: true, target: '_self' },
          { id: 19273, name: 'Laboratorio Dental', link: '/laboratorio-dental', image: 'laboratorio-dental.png', state: true, target: '_self' },
          { id: 24687, name: 'Oclusión', link: '/oclusion', image: 'oclusion.png', state: true, target: '_self' },
          { id: 83937, name: 'Odontología General', link: '/odontologia-general', image: 'odontologia-general.png', state: true, target: '_self' },
          { id: 24687, name: 'Odontopediatría', link: '/odontopediatria', image: 'odontopediatria.png', state: true, target: '_self' },
          { id: 54221, name: 'Ortodoncia', link: '/ortodoncia', image: 'ortodoncia.png', state: true, target: '_self' },
          { id: 32412, name: 'Periodoncia', link: '/periodoncia', image: 'periodoncia.png', state: true, target: '_self' },
          { id: 32412, name: 'Prostodoncia', link: '/prostodoncia', image: 'prostodoncia.png', state: true, target: '_self' },
          { id: 23859, name: 'Radiología dental', link: '/radiologia-dental', image: 'radiologia.png', state: true, target: '_self' },
          { id: 92837, name: 'Rehabilitación Oral', link: '/rehabilitacion-oral', image: 'rehabilitacion-oral.png', state: true, target: '_self' },
        ]
      }
    },
    { 
      id: 47849, name: 'Vídeos', link: 'http://online.amolca.com', image: 'videos.png', state: true, target: '_blank', submenu: ''
    },
    /*
    { 
      id: 27263, name: 'Biblioteca digital', link: '', image: 'biblioteca-digital.png', state: true, target: '_self', submenu: ''
    },
    */
  ]

  //Mobile button function
  mobileMenu() {

    //Remove router link to parent item
    let parentItem = jQuery('.hmenu > li');
    parentItem.each(function() {
      if(jQuery(this).children('ul').length > 0) {
        jQuery(this).children('a').removeAttr('ng-reflect-router-link');
        jQuery(this).children('a').removeAttr('href');
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
    let windowWidth = jQuery(window).width();
    let submenuId = `#submenu-${id}`;

    if(submenuId && windowWidth <= 1280) {
      jQuery(submenuId).slideToggle('slow', function() {
        //Change display "block" for "flex"
        if(jQuery(this).is(':visible')) jQuery(this).css('display', 'flex')        
      });
    }
  }

  mouseLeaveMenu(id) {
    jQuery('#submenu-'+id).removeClass('active');
  }

  mouseOverMenu(id) {
    jQuery('#submenu-'+id).addClass('active');
  }

  hiddeMenuDesktop(id) {
    jQuery('#submenu-'+id).removeClass('active');
    window.scrollTo(0,0);
  }

  //Hidde mobile menu onclick action
  hiddeSubmenu() {
    let menu = document.getElementById('hmenu');
    let btn = document.getElementById('mobile-btn');
    if(menu.classList.contains('active')) {
      menu.classList.remove('active')
      btn.classList.remove('active')
    }
  }

}
