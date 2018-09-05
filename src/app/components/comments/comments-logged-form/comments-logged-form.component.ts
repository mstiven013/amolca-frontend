import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommentsService } from '../../../services/post/comments.service';

@Component({
  selector: 'comments-logged-form',
  templateUrl: './comments-logged-form.component.html',
  styleUrls: ['../comments.component.scss']
})
export class CommentsLoggedFormComponent implements OnInit {

  constructor(
    private _commentService: CommentsService
  ) { }

  commentform: FormGroup;
  @Input() postId: string;
  @Output() newComment = new EventEmitter<any>();
  loader = { show: false, bgColor: '#000', mode: 'indeterminate'};
  user: any;

  ngOnInit() {

    //Set user info
    this.user = JSON.parse(localStorage.getItem('U53r'));

    //Generate comments form
    this.commentform = new FormGroup({
      'content': new FormControl(null, [
                  Validators.required
                ]),
      'termsCondition': new FormControl(null, [
                  Validators.required
                ])
    });

  }

  createComment(frm) {
    //console.log(frm.value)
    this.loader.show = true;

    let data = {
      post: this.postId,
      userName: this.user.name + ' ' + this.user.lastname,
      userEmail: this.user.email,
      content: frm.value.content
    }

    this._commentService.createComment(data)
      .map(resp => resp.json())
      .subscribe(
        data => {
          //console.log(data)
          this.newComment.emit(data);
          this.loader.show = false;
          this.commentform.reset();
        },
        err => {
          console.log(err)
        }
      )

  }

}
