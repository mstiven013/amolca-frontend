import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Pipes
import { ReplacePipe } from '../pipes/currencyFormat';

//Material
import 'hammerjs';
import 'materialize-css';
import { MatTooltipModule } from '@angular/material';

//Import components to declarate
import { NotFoundComponent } from '../pages/not-found/not-found.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { CartTotalsComponent } from '../components/cart-totals/cart-totals.component';

//Pages
import { AuthPageComponent } from '../pages/auth-page/auth-page.component';
import { CartPageComponent } from '../pages/cart-page/cart-page.component';

//Import routes
import { PageRoutes } from '../routes/pages.routes';

@NgModule({
  declarations: [
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    CartTotalsComponent,

    //Pages
    AuthPageComponent,
    CartPageComponent,

    //Pipes
    ReplacePipe,
  ],
  imports: [
    BrowserModule,
    RouterModule,

    //Material
    BrowserAnimationsModule,
    MatTooltipModule,
    RouterModule.forRoot(
      PageRoutes,
      { enableTracing: false }
    )
  ],
  exports: [
    ReplacePipe
  ]
})
export class PagesModule { }
