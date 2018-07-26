import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Import components to declarate
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { AuthPageComponent } from '../pages/auth-page/auth-page.component';

//Import routes
import { PageRoutes } from '../routes/pages.routes';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthPageComponent
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
