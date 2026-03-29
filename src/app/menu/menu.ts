import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

  constructor(private _router: Router) { } // Inject Router

  logout(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        // clear only what you need; clear() is kept for compatibility
        window.localStorage.removeItem('accessToken');
        window.localStorage.removeItem('Role');
        window.localStorage.clear();
      } catch (e) {
        console.error('localStorage error during logout:', e);
      }
    } else {
      console.warn('window.localStorage is not available.');
    }
    this._router.navigate(['/login']);
  }

}




