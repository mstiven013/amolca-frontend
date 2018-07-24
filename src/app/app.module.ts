import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopBarComponent } from './components/common/header/top-bar/top-bar.component';
import { HeaderComponent } from './components/common/header/header.component';
import { NavMenuComponent } from './components/common/header/nav-menu/nav-menu.component';
import { SocialNetworkComponent } from './components/common/social-network/social-network.component';
import { LogoComponent } from './components/common/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HeaderComponent,
    NavMenuComponent,
    SocialNetworkComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
