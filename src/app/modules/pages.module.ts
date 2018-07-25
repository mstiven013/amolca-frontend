import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { AuthPageComponent } from '../pages/auth-page/auth-page.component';
import { HomeComponent } from '../pages/home-page/home-page.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: AuthPageComponent }
]

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
      appRoutes,
      { enableTracing: false }
    )
  ]
})
export class PagesModule { }
