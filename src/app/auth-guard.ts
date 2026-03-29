import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  
  const router = inject(Router);

  // Check for the token we saved in the login step
  const token = localStorage.getItem('accessToken');

  if (token) {
    console.log('User is authenticated: ' + token);
    return true; // User is authenticated, allow access
  } else {
    // Redirect to login page if no token is found
    console.log('User is not authenticated'); 
    return router.parseUrl('/login');
  }


};
