import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'social-network',
  templateUrl: './social-network.component.html',
  styleUrls: ['./social-network.component.scss'],
})
export class SocialNetworkComponent implements OnInit {

  //Position of component
  @Input() position: string;
  @Input() background: string = 'blue';
  @Input() color: string = 'white';

  //Class of component
  class: string;

  constructor() { }

  ngOnInit() {
    this.class = this.position;;
  }

  social = [
    { name: 'Facebook', user: 'AmolcaEditorial', url: 'https://www.facebook.com/EdAmolca/', style: 'username', image: 'facebook', top: true, bottom: true, main: true},
    { name: 'Instagram', user: 'amolcacolombia', url: 'https://www.instagram.com/amolcacolombia/', style: 'username', image: 'instagram', top: true, bottom: true, main: true},
    { name: 'Twitter', user: 'RedesAmolca', url: 'https://twitter.com/EAmolca', style: 'username', image: 'twitter', top: true, bottom: true, main: true }
  ]

}
