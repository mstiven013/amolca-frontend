import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'big-searcher',
  templateUrl: './big-searcher.component.html',
  styleUrls: ['./big-searcher.component.scss']
})
export class BigSearcherComponent implements OnInit {

  searchStr: any = '';
  sform: FormGroup;

  constructor(
    private _router: Router,
  ) { }

  ngOnInit() {
    this.sform = new FormGroup({
      search: new FormControl(this.searchStr, [])
    });
  }

  redirectSearchPage() {
    if(this.searchStr !== '') {
      this._router.navigate(['/buscar'], { queryParams: { s: this.searchStr } });
    }
  }

}
