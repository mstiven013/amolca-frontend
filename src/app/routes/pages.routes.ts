import { Routes } from '@angular/router';

//Components for pages
import { NotFoundComponent } from '../pages/not-found/not-found.component';
import { AuthPageComponent } from '../pages/auth-page/auth-page.component';
import { HomeComponent } from '../pages/home-page/home-page.component';
import { CartPageComponent } from '../pages/cart-page/cart-page.component';
import { BookPageComponent } from '../pages/book-page/book-page.component';
import { MyAccountPageComponent } from '../pages/my-account-page/my-account-page.component';
import { AuthGuard } from '../guards/auth.guard';
import { AuthorPageComponent } from '../pages/author-page/author-page.component';
import { PostPageComponent } from '../pages/post-page/post-page.component';

export const PageRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'iniciar-sesion', component: AuthPageComponent },
    { path: 'mi-cuenta', component: MyAccountPageComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard] },
    { path: 'carrito', component: CartPageComponent },
    { path: 'libro/:slug', component: BookPageComponent },
    { path: 'autor/:slug', component: AuthorPageComponent },
    { path: 'blog/:slug', component: PostPageComponent },
    { path: '404', component: NotFoundComponent },

    //Not found page
    { path: '**', component: NotFoundComponent }
]