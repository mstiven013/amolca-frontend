import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'big-searcher',
  templateUrl: './big-searcher.component.html',
  styleUrls: ['./big-searcher.component.scss']
})
export class BigSearcherComponent implements OnInit {

  searchStr: any = '';

  constructor(
    private _router: Router,
  ) { }

  ngOnInit() {
  }

  redirectSearchPage() {
    if(this.searchStr !== '') {
      this._router.navigate(['/buscar'], { queryParams: { s: this.searchStr } });
    }
  }

}
