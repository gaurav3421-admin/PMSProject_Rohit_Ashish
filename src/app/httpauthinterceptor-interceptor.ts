import { HttpInterceptorFn } from '@angular/common/http';

export const httpauthinterceptorInterceptor: HttpInterceptorFn = (req, next) => {


  // Retrieve token from local storage
  const token = window.localStorage.getItem('accessToken');

  // Coming HttpClient Request 
  console.log('[Auth Interceptor] Intercepting request', {
    url: req.url,
    method: req.method,
    hasToken: !!token,
    token: token,
    originalHeaders: req.headers?.keys?.() ?? null
  });



  // Clone request to add the Bearer token if it exists

  const authReq = token ? req.clone({
    setHeaders: { Authorization: `Bearer ${token}` }
  }) : req;

  console.log('[Auth Interceptor] Modified New Request', authReq);

  return next(authReq);


};
