//Angular libraries and modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '../../node_modules/@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Form
import { FormsModule }   from '@angular/forms';

//Pipes
import { ReplacePipe } from './pipes/currencyFormat';

//Material
import 'hammerjs';
import 'materialize-css';
import { MatTooltipModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';

//Pages
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';

//Page Components
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CartTotalsComponent } from './components/cart-totals/cart-totals.component';

//Common components
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/common/top-bar/top-bar.component';
import { HeaderComponent } from './components/common/header/header.component';
import { NavMenuComponent } from './components/common/nav-menu/nav-menu.component';
import { SocialNetworkComponent } from './components/common/social-network/social-network.component';
import { LogoComponent } from './components/common/logo/logo.component';
import { HomeComponent } from './pages/home-page/home-page.component';

//Footer components
import { FooterComponent } from './components/common/footer/footer.component';
import { BottomBarComponent } from './components/common/bottom-bar/bottom-bar.component';

//Footer blocks components
import { BlockContactComponent } from './components/common/footer/block-contact/block-contact.component';
import { BlockAboutComponent } from './components/common/footer/block-about/block-about.component';
import { BlockHelpComponent } from './components/common/footer/block-help/block-help.component';
import { BlockSocialComponent } from './components/common/footer/block-social/block-social.component';

//Buttons components
import { LoginBtnComponent } from './components/common/login-btn/login-btn.component';
import { CartBtnComponent } from './components/common/cart-btn/cart-btn.component';

//Page routes
import { PageRoutes } from './routes/pages.routes';

//Services
import { CartService } from './services/cart/cart.service';

//Routes var
const appRoutes: Routes = [
  { path: '', component: AppComponent }
]

@NgModule({
  declarations: [
    AppComponent,

    //Common components
    TopBarComponent,
    HeaderComponent,
    NavMenuComponent,
    SocialNetworkComponent,
    LogoComponent,
    LoginBtnComponent,
    CartBtnComponent,

    //Footer components
    FooterComponent,
    BottomBarComponent,
    BlockContactComponent,
    BlockAboutComponent,
    BlockHelpComponent,
    BlockSocialComponent,

    //Auth page components
    LoginComponent,
    RegisterComponent,

    //Cart components
    CartTotalsComponent,

    //Pages
    HomeComponent,
    AuthPageComponent,
    CartPageComponent,
    NotFoundComponent,

    //Pipes
    ReplacePipe,
  ],
  imports: [
    //Angular libraries
    BrowserModule,
    RouterModule,
    FormsModule,

    //Material
    MatIconModule,
    BrowserAnimationsModule,
    MatTooltipModule,

    RouterModule.forRoot(
      PageRoutes,
      { enableTracing: false }
    )
  ],
  providers: [
    CartService
  ],
  exports: [
    ReplacePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
