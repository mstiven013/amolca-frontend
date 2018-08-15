//Angular libraries and modules
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule, Http, Headers, RequestOptions, URLSearchParams, Response } from '@angular/http';

import 'rxjs/add/operator/map';

import { NgxCarouselModule } from 'ngx-carousel';

//Form
import { FormsModule }   from '@angular/forms';

//Pipes
import { ReplacePipe } from './pipes/currencyFormat';

//Material
import 'hammerjs';
import 'materialize-css';
import { MatTooltipModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

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

//Books components
import { BooksLoopComponent } from './components/books/books-loop/books-loop.component';

//Page routes
import { PageRoutes } from './routes/pages.routes';

//Cart Services
import { GetCartService } from './services/cart/get-cart.service';
import { CartService } from './services/cart/cart.service';

//Book Services
import { GetBookService } from './services/book/get-book.service';

//Coupon Services
import { GetCouponService } from './services/coupons/get-coupon.service';
import { BookPageComponent } from './pages/book-page/book-page.component';
import { AuthorsCarouselComponent } from './components/authors/authors-carousel/authors-carousel.component';
import { BigSearcherComponent } from './components/big-searcher/big-searcher.component';

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

    //Books components
    BooksLoopComponent,

    //Pages
    HomeComponent,
    AuthPageComponent,
    CartPageComponent,
    NotFoundComponent,

    //Pipes
    ReplacePipe,

    BookPageComponent,

    AuthorsCarouselComponent,

    BigSearcherComponent,
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
    MatExpansionModule,

    //Http
    HttpClientModule,
    HttpModule,

    //Ngx
    NgxCarouselModule,

    RouterModule.forRoot(
      PageRoutes,
      { enableTracing: false }
    )
  ],
  providers: [
    //Carts
    GetCartService,
    CartService,

    //Books
    GetBookService,

    //Coupons
    GetCouponService,

    Title
  ],
  exports: [
    ReplacePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
