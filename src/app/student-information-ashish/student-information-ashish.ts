import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule, NgForm } from '@angular/forms' // Step 1  

@Component({
  selector: 'app-student-information-ashish',
  imports: [CommonModule, FormsModule], // Step 2
  templateUrl: './student-information-ashish.html',
  styleUrl: './student-information-ashish.css',
})
export class StudentInformationAshish {


  genders = ['Male', 'Female', 'Other'];
  // Data model for two-way binding
  studentData = {
    fullName: '',
    age: '',
    gender: '',
    email:''
  };

  SumbitStudentInformtion(studentInfo: NgForm) {

    if (studentInfo.valid) {
      console.log(studentInfo.value); // Log form values to console
    }
    else {
      console.log("Form is invalid");
    }



  }

}
