import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-terms-conditions-page',
  templateUrl: './terms-conditions-page.component.html',
  styleUrls: ['./terms-conditions-page.component.scss']
})
export class TermsConditionsPageComponent implements OnInit {

  constructor(
    private _appComponent: AppComponent,
    private _meta: Meta,
  ) { }

  ngOnInit() {
    window.scrollTo(0,0)

    //Set meta Description
      this._appComponent.setMetaDescription('Términos y condiciones de uso - Politica de privacidad');
      this._appComponent.setMetaDescription('Contrato de términos y condiciones de uso y Politica de privacidad de www.amolca.com.co');
  }

}
