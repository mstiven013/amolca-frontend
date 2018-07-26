import { Routes } from '@angular/router';

//Components for pages
import { AuthPageComponent } from '../pages/auth-page/auth-page.component';
import { HomeComponent } from '../pages/home-page/home-page.component';

export const PageRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: AuthPageComponent }
]