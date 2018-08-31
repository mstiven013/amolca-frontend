import { Component, OnInit } from '@angular/core';
import { GetSpecialtyService } from '../../services/specialty/get-specialty.service';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'specialty-page',
  templateUrl: './specialty-page.component.html',
  styleUrls: ['./specialty-page.component.scss']
})
export class SpecialtyPageComponent implements OnInit {

  private sub: any;
  specialtyActive: any;
  specialty: any = {};
  exists = true;

  constructor(
    private _appComponent: AppComponent,
    private _getSpecialtyService: GetSpecialtyService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this._activatedRoute.params.subscribe(params => {
      this.specialtyActive = params['slug']
      this.getSpecialtyInfo(this.specialtyActive);
    });
  }

  getSpecialtyInfo(slug) {
    console.log(slug)
    this._getSpecialtyService.getSpecialtiesBySlug(slug)
      .map(resp => resp.json())
      .subscribe(
        data => {
          this.setSpecialtyInfo(data);
        },
        err => this.exists = false
      )
  }

  setSpecialtyInfo(s) {
    this.specialty = s;
    this.exists = true;

    //Set meta Title
    if(this.specialty.metaTitle && this.specialty.metaTitle !== '') {
      this._appComponent.setMetaTitle(this.specialty.metaTitle);
    } else {
      this._appComponent.setMetaTitle(this.specialty.title);
    }

    //Set meta Description
    if(this.specialty.metaDescription && this.specialty.metaDescription !== '') {
      this._appComponent.setMetaDescription(this.specialty.metaDescription);
    } else {
      this._appComponent.setMetaDescription(this.specialty.description);
    }
  }

}
