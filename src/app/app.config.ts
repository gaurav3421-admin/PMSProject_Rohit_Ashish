import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient,withInterceptors } from '@angular/common/http'; // Import this
//import { provideHttpClient } from '@angular/common/http'; // Import this
import {  httpauthinterceptorInterceptor } from '../app/httpauthinterceptor-interceptor' // Step 1

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    provideHttpClient(
      withInterceptors([httpauthinterceptorInterceptor]) // Step 2 // Registers your functional interceptor
    ) 
  ]
};
