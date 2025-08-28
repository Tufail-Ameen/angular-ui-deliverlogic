import { Routes } from '@angular/router';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { ResturantPageComponent } from './Pages/resturant-page/resturant-page.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent,
    },
    {
        path: 'resturant-page',
        component: ResturantPageComponent,
    },
];
