import { Component, OnInit, Input } from '@angular/core';
import { GetPostService } from '../../../services/post/get-post.service';
import { GlobalPostLoopComponent } from '../global-posts-loop.component';

declare var jQuery: any;
declare var Materialize: any;

@Component({
  selector: 'post-loop',
  templateUrl: './post-loop.component.html',
  styleUrls: ['../post-loop.component.scss']
})
export class PostLoopComponent extends GlobalPostLoopComponent {

  //Custom vars
  posts: any = [];

  ngOnInit() {
    this.getPostsInfo();
    this.transformItemImageHeight();
  }

  ngAfterViewInit() {
  }

  myfunc(event: Event) {
    //
  }

}
