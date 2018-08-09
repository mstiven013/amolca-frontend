import { Routes } from '@angular/router';

//Components for pages
import { NotFoundComponent } from '../pages/not-found/not-found.component';
import { AuthPageComponent } from '../pages/auth-page/auth-page.component';
import { HomeComponent } from '../pages/home-page/home-page.component';
import { CartPageComponent } from '../pages/cart-page/cart-page.component';
import { BookPageComponent } from '../pages/book-page/book-page.component';

export const PageRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'iniciar-sesion', component: AuthPageComponent },
    { path: 'carrito', component: CartPageComponent },
    { path: 'libro/:slug', component: BookPageComponent },

    //Not found page
    { path: '**', component: NotFoundComponent }
]