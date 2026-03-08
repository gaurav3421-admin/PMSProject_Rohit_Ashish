import { Component,inject } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms'
import { CommonModule} from '@angular/common';
///import { Router} from '@angular/router'; 

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

//private router = inject(Router);

    Login(_loginForm: NgForm): void {
    if (_loginForm.valid) {
      console.log('Form Submitted', _loginForm.value);
       //this.router.navigate(['/home/']);

    } else {
      console.log('Invalid Form');
    }
  }
}
