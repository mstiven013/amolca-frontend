import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer-block-social',
  templateUrl: './block-social.component.html',
  styleUrls: ['../footer.component.css']
})
export class BlockSocialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  social = [
    { name: 'Facebook', user: 'AmolcaEditorial', url: '#', style: 'username', image: '', state: true },
    { name: 'Instagram', user: 'amolcacolombia', url: '#', style: 'username', image: '', state: true },
    { name: 'Twitter', user: 'RedesAmolca', url: '#', style: 'username', image: '', state: true }
  ]

}
