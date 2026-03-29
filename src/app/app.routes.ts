import { Routes } from '@angular/router';
import { Home } from '../app/home/home';
import { Login } from '../app/login/login';
import { ErrorPage } from '../app/error-page/error-page';
//import { StudentRegistration } from '../app/student-registration/student-registration';
import { ReactiveForm } from '../app/reactive-form/reactive-form';
//import { authGuard  } from '../app/auth-guard';
import { authnewGuard , authnewChildGuard} from '../app/authnew-guard'; 


export const routes: Routes = [
    { path: '', component: Login, pathMatch: 'full' }, // default route
    { path: 'login', component: Login }, 
    {  path: 'reactiveform',  component: ReactiveForm , canActivate:[authnewGuard] }, 
    //{ path: 'home', component: Home }, 
    {
        path: 'home',
        component: Home,
        canActivate: [authnewGuard],
        canActivateChild: [authnewChildGuard],
        children: [
            //{ path: 'registration', component: StudentRegistration },

            { path: 'registration', loadComponent:() => import('../app/student-registration/student-registration').then(m=>m.StudentRegistration)} // lazy loading
        ]

    },
    { path: 'errorpage', component: ErrorPage }, // wildcard route
    { path: '**', component: ErrorPage }, // wildcard route

        
    

];

