import { Routes } from '@angular/router';
import { Home } from '../app/home/home';
import { Login } from '../app/login/login';
import { ErrorPage } from '../app/error-page/error-page';
import { StudentRegistration } from '../app/student-registration/student-registration';


export const routes: Routes = [
    { path: '', component: Login, pathMatch: 'full' }, // default route
    {
        path: 'home',
        component: Home,
        children: [
            { path: 'Registration', component: StudentRegistration },
        ]







    },
    { path: '**', component: ErrorPage }, // wildcard route

];
