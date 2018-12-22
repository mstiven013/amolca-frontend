import { Component, OnInit } from '@angular/core';
import { GetPostService } from '../../services/post/get-post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  private sub: any;
  postActive: any;
  post: any = {};
  loadPost: Boolean = false;
  exists = true;

  constructor(
    private _appComponent: AppComponent,
    private _getPostService: GetPostService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.sub = this._activatedRoute.params.subscribe(params => {
      this.postActive = params['slug']
    });

    this.getPostInfo(this.postActive);
  }

  getPostInfo(slug) {
    this._getPostService.getPostsBySlug(slug)
      .map(resp => resp.json())
      .subscribe(
        data => this.setPostInfo(data),
        err => this._router.navigate(['/'])
      )
  }

  setPostInfo(p) {
    this.post = p;
    this.loadPost = true;

    //Set meta Title
    if(this.post.metaTitle && this.post.metaTitle !== '') {
      this._appComponent.setMetaTitle(this.post.metaTitle);
    } else {
      this._appComponent.setMetaTitle(this.post.name);
    }

    //Set meta Description
    if(this.post.metaDescription && this.post.metaDescription !== '') {
      this._appComponent.setMetaDescription(this.post.metaDescription);
    } else {
      this._appComponent.setMetaDescription(this.post.description);
    }
  }

}
