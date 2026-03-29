import { Component,inject } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms'
import { CommonModule} from '@angular/common';
import { Router } from '@angular/router'; // Router service

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {

//private router = inject(Router);
 constructor( private _router:Router ) { } // Inject 


    Login(_loginForm: NgForm): void {
    if (_loginForm.valid) {
      console.log('Form Submitted', _loginForm.value);
      //this._router.navigate(['/home/registration']);
      //this._router.navigate(['/home/registration'], { queryParams: { login: true ,sasdsdf:wwe ,adsdaf:adsd } });
      
       localStorage.setItem('accessToken', 'xxxyyyzzz'); // Simulate token storage after successful login
       localStorage.setItem('Role', 'admin'); // Simulate token storage after successful login
       //localStorage.setItem('Role', 'user'); // Simulate token storage after successful login

      

      this._router.navigateByUrl('/home/registration');

    } else {
      console.log('Invalid Form');
    }
  }
}
