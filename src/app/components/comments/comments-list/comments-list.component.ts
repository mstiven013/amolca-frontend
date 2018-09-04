import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['../comments.component.scss']
})
export class CommentsListComponent implements OnInit {

  @Input() comments: any = [];

  constructor() { }

  ngOnInit() {
    console.log(this.comments)
  }

}
