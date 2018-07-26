import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Import components to declarate
import { NotFoundComponent } from '../pages/not-found/not-found.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { AuthPageComponent } from '../pages/auth-page/auth-page.component';
import { CartPageComponent } from '../pages/cart-page/cart-page.component';

//Import routes
import { PageRoutes } from '../routes/pages.routes';

@NgModule({
  declarations: [
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    AuthPageComponent,
    CartPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,

    RouterModule.forRoot(
      PageRoutes,
      { enableTracing: false }
    )
  ]
})
export class PagesModule { }
