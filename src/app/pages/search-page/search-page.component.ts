import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearcherService } from 'src/app/services/post/searcher.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  private sub: any;
  postActive: any;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _searcherService: SearcherService
  ) { }

  ngOnInit() {
    this.sub = this._activatedRoute.queryParams.subscribe(params => {
      if(params['s'] !== undefined && params['s'] !== '') {
        this._searcherService.getResults(params['s'])
          .map(resp => resp.json())
          .subscribe(
            data => {
              console.log(data)
            },
            err => {
              console.log(err)
            }
          )
      }
    });
  }

}
