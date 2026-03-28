import { Routes } from '@angular/router';
import { Home } from '../app/home/home';
import { Login } from '../app/login/login';
import { ErrorPage } from '../app/error-page/error-page';
//import { StudentRegistration } from '../app/student-registration/student-registration';


export const routes: Routes = [
    { path: '', component: Login, pathMatch: 'full' }, // default route
    { path: 'login', component: Login }, 
    //{ path: 'home', component: Home }, 
    {
        path: 'home',
        component: Home,
        children: [
            //{ path: 'registration', component: StudentRegistration },
            { path: 'registration', loadComponent:() => import('../app/student-registration/student-registration').then(m=>m.StudentRegistration)} // lazy loading

            
        ]

    },
    { path: '**', component: ErrorPage }, // wildcard route

        
    

];
