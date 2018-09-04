import { Component, OnInit, Input } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CommentsService } from '../../services/post/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  //Receive info
  @Input() postId: string;

  //Declare vars
  comments: any = [];
  userLogged: Boolean = false;

  constructor(
    private _commentService: CommentsService
  ) { }

  ngOnInit() {
    this.getComments();
  }

  //Watch when menu clicked to change menu
  onNewCommentEvent(data) {
    this.getComments();
  }

  getComments() {
    this._commentService.getCommentsByPostId(this.postId)
      .map(resp => resp.json())
      .subscribe(
        data => { this.comments = data; },
        err => { console.log(err) }
      )
  }

}
