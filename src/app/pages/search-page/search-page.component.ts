import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearcherService } from 'src/app/services/post/searcher.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  //Url vars
  private sub: any;
  search: any;

  //Loaders and show info
  showInfo = false;
  showNotFound = false;
  loader = { show: true, bgColor: '#000', mode: 'indeterminate'};

  //Info vars
  books: any = [];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _searcherService: SearcherService
  ) { }

  ngOnInit() {
    this.sub = this._activatedRoute.queryParams.subscribe(params => {
      if(params['s'] !== undefined && params['s'] !== '') {
        window.scrollTo(0,0);
        this.search = params['s'];
        this._searcherService.getResults(this.search)
          .map(resp => resp.json())
          .subscribe(
            data => this.setPageInfo(data),
            err => this.mapErrorSearch(err)
          )
      }
    });
  }

  //Set page data
  setPageInfo(data) {
    this.books = data;
    this.loader.show = false;
    this.showInfo = true;
  }

  //Map errors
  mapErrorSearch(err) {
    console.log(err)
  }

}
