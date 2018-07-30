import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'social-network',
  templateUrl: './social-network.component.html',
  styleUrls: ['./social-network.component.css'],
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
    { name: 'Facebook', user: 'AmolcaEditorial', url: '#', style: 'username', image: 'facebook', top: true, bottom: true, main: true},
    { name: 'Instagram', user: 'amolcacolombia', url: '#', style: 'username', image: 'instagram', top: true, bottom: true, main: true},
    { name: 'Twitter', user: 'RedesAmolca', url: '#', style: 'username', image: 'twitter', top: true, bottom: true, main: true }
  ]

}
