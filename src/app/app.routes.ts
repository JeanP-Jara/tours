import { Routes } from '@angular/router';
import { TourListComponent } from './features/tours/components/tour-list/tour-list.component';
import { TourDetailComponent } from './features/tours/components/tour-detail/tour-detail.component';
import { HomeComponent } from './features/tours/components/home/home.component';
import { LoginComponent } from './features/users/components/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'tours', component: TourListComponent }, 
    { path: 'toursd', component: TourDetailComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '/tours' } 
];
