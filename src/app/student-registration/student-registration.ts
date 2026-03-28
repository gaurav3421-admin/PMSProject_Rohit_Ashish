import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms' // step 1 // teamplate-driven forms
import { CommonModule } from '@angular/common'; // Step 2- // for directives like ngIf, ngFor
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-student-registration',
  standalone: true, 
  imports: [FormsModule, CommonModule], // Register FormsModule and CommonModule
  templateUrl: './student-registration.html',
  styleUrls: ['./student-registration.css'],
})
export class StudentRegistration implements OnInit {

  // Data model for two-way binding
  studentData = {
    fullName: 'adasd',
    age: '25',
    gender: 'Male'
  };

  genders = ['Male', 'Female', 'Other'];
  constructor(private _router: Router) { }
  ngOnInit() {
    // Initialization logic here
  }

  onStudentInfoamtionSubmit(studentForm: NgForm) {

        if (studentForm.valid) {
      console.log('Form Submitted!', studentForm.value);

      // Use Promise handlers to surface navigation errors
      this._router.navigate(['/home/registration'])
        .then(success => {
          if (!success) console.error('Router.navigate returned false (no navigation).');
        })
        .catch(err => console.error('Navigation error:', err));

      // Or try navigateByUrl:
      // this._router.navigateByUrl('/home/registration').catch(err => console.error('navigateByUrl error:', err));
    } else {
      console.log('Form is invalid');
    }

  }



}
