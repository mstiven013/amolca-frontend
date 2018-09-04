import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommentsService } from '../../../services/post/comments.service';

@Component({
  selector: 'comments-logout-form',
  templateUrl: './comments-logout-form.component.html',
  styleUrls: ['../comments.component.scss']
})
export class CommentsLogoutFormComponent implements OnInit {

  commentform: FormGroup;
  @Input() postId: string;
  @Output() newComment = new EventEmitter<any>();

  constructor(
    private _commentService: CommentsService
  ) { }

  ngOnInit() {

    //Generate comments form
    this.commentform = new FormGroup({
      'name': new FormControl(null, [
                  Validators.required
                ]),
      'email': new FormControl(null, [
                  Validators.required,
                  Validators.email
                ]),
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
    let data = {
      post: this.postId,
      userName: frm.value.name,
      userEmail: frm.value.email,
      content: frm.value.content
    }

    this._commentService.createComment(data)
      .map(resp => resp.json())
      .subscribe(
        data => {
          //console.log(data)
          this.newComment.emit(data);
        },
        err => {
          console.log(err)
        }
      )

  }

}
