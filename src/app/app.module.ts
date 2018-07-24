import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { TopBarComponent } from './components/common/header/top-bar/top-bar.component';
import { HeaderComponent } from './components/common/header/header.component';
import { NavMenuComponent } from './components/common/header/nav-menu/nav-menu.component';
import { SocialNetworkComponent } from './components/common/social-network/social-network.component';
import { LogoComponent } from './components/common/logo/logo.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
  {
    path: '', component: AppComponent
  },
  {
    path: '**', component: NotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HeaderComponent,
    NavMenuComponent,
    SocialNetworkComponent,
    LogoComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MatIconModule,

    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
