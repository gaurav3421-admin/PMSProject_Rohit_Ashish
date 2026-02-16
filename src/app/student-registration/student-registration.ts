import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms' // step 1 // teamplate-driven forms
import { CommonModule } from '@angular/common'; // Step 2- // for directives like ngIf, ngFor

@Component({
  selector: 'app-student-registration',
  imports: [FormsModule, CommonModule], // Register FormsModule and CommonModule
  templateUrl: './student-registration.html',
  styleUrl: './student-registration.css',
})
export class StudentRegistration implements OnInit {

  // Data model for two-way binding
  studentData = {
    fullName: 'adasd',
    age: '25',
    gender: 'Male'
  };

  genders = ['Male', 'Female', 'Other'];
  constructor() { }
  ngOnInit() {
    // Initialization logic here
  }

  onStudentInfoamtionSubmit(studentForm: NgForm) {

    if (studentForm.valid) {
      // Process the form data
      console.log('Form Submitted!', studentForm.value);
    } else {
      console.log('Form is invalid');
    }

  }



}
