import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'custom-banner',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss']
})
export class BannersComponent implements OnInit {

  @Input() type: any;
  @Input() id: any;
  @Input() message: any;

  showBanner: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
