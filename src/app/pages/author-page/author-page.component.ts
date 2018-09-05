import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { GetAuthorService } from '../../services/author/get-author.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.scss']
})
export class AuthorPageComponent implements OnInit {

  private sub: any;
  authorActive: any;
  author: any = {};
  exists = true;
  loader = { show: true, bgColor: '#000', mode: 'indeterminate'};

  constructor(
    //App component
    private _appComponent: AppComponent,

    //Authors service
    private _authorService: GetAuthorService,

    //Router services
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    //Get slug of active route
    this.sub = this._activatedRoute.params.subscribe(params => {
      this.authorActive = params['slug']

      this.loader.show = true;

      //Call get author info function
      this.getAuthorInfo(this.authorActive);
    });
  }

  //Get author information with get author service
  getAuthorInfo(slug) {
    this._authorService.getAuthorsBySlug(slug)
      .map(resp => resp.json())
      .subscribe(
        data => { this.setAuthorInfo(data) },
        err => { this.exists = false }
      )
  }

  //Set author information after get author service
  setAuthorInfo(author) {
    this.author = author;
    this.loader.show = false;

    //Set meta Title
    if(this.author.metaTitle && this.author.metaTitle !== '') {
      this._appComponent.setMetaTitle(this.author.metaTitle);
    } else {
      this._appComponent.setMetaTitle(this.author.name);
    }

    //Set meta Description
    if(this.author.metaDescription && this.author.metaDescription !== '') {
      this._appComponent.setMetaDescription(this.author.metaDescription);
    } else {
      this._appComponent.setMetaDescription(this.author.description);
    }
  }

}
