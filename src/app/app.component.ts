import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private _titleService: Title,
    private _meta: Meta,
  ) {}

  public setMetaTitle( newTitle: string ) {
    this._titleService.setTitle( newTitle );
  }

  public setMetaDescription( newDescription: string ) {
    this._meta.addTag({ name: "description", content: newDescription });
  }

}
