import { Component, OnInit, Input } from '@angular/core';
import { GetPostService } from '../../services/post/get-post.service';

declare var jQuery: any;
declare var Materialize: any;

@Component({
  selector: 'global-post-carousel',
  template: '',
  styleUrls: ['post-loop.component.scss']
})
export class GlobalPostLoopComponent {

  //Declare vars
  posts: any = [];
  error = { show: false, msg: '' }
  showPosts: Boolean = false;
  showLoader: Boolean = true;
  loader = { show: true, bgColor: '#000', mode: 'indeterminate'};

  //Declare input vars
  @Input() itemsPerRow: any = 4;
  @Input() maxShowItems: any = 12;
  @Input() orderBy: any = 'title';
  @Input() order: any = 1;
  @Input() pageType : any = 'normal';

  constructor(
    private _getPostService: GetPostService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  //Get post info from server
  getPostsInfo() {
    this._getPostService.getAllPosts()
      .map(resp => resp.json())
      .subscribe(
        data => { 
          if(data.length > 0) {
            this.setPostsInfo(data)
          } else {
            let err = { status: 404 }
            this.mapErrors(err, 'posts')
          }
        },
        err => { 
          this.mapErrors(err, 'posts')
        }
      )
  }

  //Set post info and show posts
  setPostsInfo(data) {
    this.posts = data;
    this.showLoader = false;
    this.error.show = false;
    this.showPosts = true;
  }

  transformItemImageHeight() {
    jQuery(document).ready(function() {
      jQuery('.image-container').each(function() {
        jQuery(this).css('height', jQuery(this).width())
      })
    })
  }

  //Function to error's map after login
  mapErrors(err, type) {
    this.showLoader = false;

    switch (err.status) {
      case 404:
          this.error.show = true;

          //If message is for author
          if(type == 'posts') this.error.msg = `Actualmente no tenemos publicaciones recientes.`;

          break;

      default:
          this.error.show = true;
          this.error.msg = `Ha ocurrido un error, por favor inténtelo de nuevo.`;
        break;
    }
  }

  myfunc(event: Event) {
    //
  }

}
