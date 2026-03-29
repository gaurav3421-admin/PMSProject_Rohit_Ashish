import { CanActivateFn,CanActivateChildFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authnewGuard: CanActivateFn = (route, state) => {
  const _router = inject(Router);
  const token = localStorage.getItem('accessToken');
  const Role = localStorage.getItem('Role');
  if (token && Role === 'admin' ) {
    console.log('User is authenticated: ' + token);
    return true;

  }
  else {
    console.log('User is not authenticated');
    return _router.createUrlTree(['/errorpage']);
  }
};

export const authnewChildGuard: CanActivateChildFn = (childRoute, state) => {
  const _router = inject(Router);
  const token = localStorage.getItem('accessToken');
  const Role = localStorage.getItem('Role');
  if (token && Role === 'admin' ) {
    console.log('User is authenticated for child route: ' + token);
    console.log('authChildGuard fired for child:', childRoute.routeConfig?.path);
    return true;

  }
  else {
    console.log('User is not authenticated for child route: ' + childRoute);
    //return _router.parseUrl('/login');
    return _router.createUrlTree(['/login']);
  }
};
