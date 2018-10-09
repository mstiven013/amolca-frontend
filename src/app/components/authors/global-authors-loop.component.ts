import { Component, OnInit, Input } from '@angular/core';
import { GetAuthorService } from '../../services/author/get-author.service';

declare var jQuery: any;
declare var Materialize: any;

@Component({
    template: '',
    selector: 'global-authors-carousel',
    styleUrls: ['./authors-carousel.component.scss']
})
export class GlobalAuthorsLoopComponent {

  //Input vas
  @Input() itemsPerRow: any = 4;
  @Input() maxItems: any = 12;
  @Input() orderBy: any = 'name';
  @Input() order: any = 1;

  //Success and erros vars
  error = { show: false, msg: '' }
  showAuthors: Boolean = false;
  showLoader: Boolean = true;
  loader = { show: true, bgColor: '#000', mode: 'indeterminate'};

  //Custom vars
  authors: any = [];

  constructor(
    protected _getAuthorService: GetAuthorService
  ) { }

  //Function while server responded
  setAuthorsInfo(data) {
    this.authors = data;
    this.showLoader = false;
    this.showAuthors = true;
    this.error.show = false; 
  }

  //Function to error's map after login
  mapErrors(err, type) {
    this.showLoader = false;

    switch (err.status) {
      case 404:
          this.error.show = true;

          //If message is for author
          if(type == 'autores') this.error.msg = `Actualmente no contamos con autores destacados.`;

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
