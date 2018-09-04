import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'comments-logged-form',
  templateUrl: './comments-logged-form.component.html',
  styleUrls: ['../comments.component.scss']
})
export class CommentsLoggedFormComponent implements OnInit {

  constructor() { }

  @Input() user: any;

  ngOnInit() {
  }

}
