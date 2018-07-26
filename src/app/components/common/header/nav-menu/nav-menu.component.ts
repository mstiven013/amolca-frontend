import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['../header.component.css']
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
      name: 'Medicina', link: 'medicina', image: '', state: true, target: '_self', submenu: []
    },
    {
      name: 'Odontología', link: 'odontologia', image: '', state: true, target: '_self', submenu: []
    },
    { 
      name: 'Biblioteca digital', link: 'medicina', image: '', state: true, target: '_self', submenu: []
    },
  ]

  //Mobile button function
  mobileMenu() {

    let btn = document.getElementById('mobile-btn');
    let menu = document.getElementById('hmenu');

    if(btn.classList.contains('active')) {
      btn.classList.remove('active')
    } else {
      btn.classList.add('active')
    }

    if(menu.classList.contains('active')) {
      menu.classList.remove('active')
    } else {
      menu.classList.add('active')
    }

  }

}
