import { Component, OnInit, Input } from '@angular/core';
import { GetPostService } from '../../../services/post/get-post.service';

declare var jQuery: any;
declare var Materialize: any;

@Component({
  selector: 'post-loop',
  templateUrl: './post-loop.component.html',
  styleUrls: ['../post-loop.component.scss']
})
export class PostLoopComponent implements OnInit {

  @Input() itemsPerRow: any = 4;

  //Custom vars
  posts: any = [];

  constructor(
    private _getPostService: GetPostService
  ) { }

  ngOnInit() {
    this.getPostsInfo();
    this.transformItemImageHeight();
  }

  ngAfterViewInit() {
  }

  getPostsInfo() {
    this._getPostService.getAllPosts()
      .map(resp => resp.json())
      .subscribe(
        data => { this.posts = data;},
        err => { console.log(err.json()) }
      )
  }

  transformItemImageHeight() {
    jQuery(document).ready(function() {
      jQuery('.image-container').each(function() {
        jQuery(this).css('height', jQuery(this).width())
      })
    })
  }

  myfunc(event: Event) {
    //
  }

}
