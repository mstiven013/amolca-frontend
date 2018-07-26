import { Routes } from '@angular/router';

//Components for pages
import { AuthPageComponent } from '../pages/auth-page/auth-page.component';
import { HomeComponent } from '../pages/home-page/home-page.component';
import { CartPageComponent } from '../pages/cart-page/cart-page.component';

export const PageRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'iniciar-sesion', component: AuthPageComponent },
    { path: 'carrito', component: CartPageComponent }
]