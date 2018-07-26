//Angular libraries and modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

//Modules
import { PagesModule } from './modules/pages.module';

//Common components
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/common/header/top-bar/top-bar.component';
import { HeaderComponent } from './components/common/header/header.component';
import { NavMenuComponent } from './components/common/header/nav-menu/nav-menu.component';
import { SocialNetworkComponent } from './components/common/social-network/social-network.component';
import { LogoComponent } from './components/common/logo/logo.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { HomeComponent } from './pages/home-page/home-page.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { BottomBarComponent } from './components/common/footer/bottom-bar/bottom-bar.component';
import { BlockContactComponent } from './components/common/footer/block-contact/block-contact.component';
import { BlockAboutComponent } from './components/common/footer/block-about/block-about.component';
import { BlockHelpComponent } from './components/common/footer/block-help/block-help.component';
import { BlockSocialComponent } from './components/common/footer/block-social/block-social.component';
import { LoginBtnComponent } from './components/common/login-btn/login-btn.component';
import { CartBtnComponent } from './components/common/cart-btn/cart-btn.component';

//Routes var
const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: '**', component: NotFoundComponent }
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
    HomeComponent,
    FooterComponent,
    BottomBarComponent,
    BlockContactComponent,
    BlockAboutComponent,
    BlockHelpComponent,
    BlockSocialComponent,
    LoginBtnComponent,
    CartBtnComponent
  ],
  imports: [
    PagesModule,
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
