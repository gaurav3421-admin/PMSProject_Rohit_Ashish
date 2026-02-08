import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';  // Step 1

@Component({
  selector: 'app-angular-data-binding',
  imports: [FormsModule], /// Step 2 
  templateUrl: './angular-data-binding.html',
  styleUrl: './angular-data-binding.css',
})
export class AngularDataBinding implements OnInit {


  studentName: string = 'Ashish';
  email: string = 'ashish@example.com';
  age: number = 25;
  _isDisabled: boolean = true;

  ngOnInit(): void {
    console.log(this.studentName);
    console.log(this.email);
    console.log(this.age);
    console.log(this._isDisabled);
  }

  submitStudentInformation(studentName: string): void {
    console.log('Student Information Submitted Successfully');
    console.log('Name: ' + studentName);
  }


  ReferenceVarFunction( emailid:string,age:string ):void 
  {
    console.log('Email ID: ' + emailid);
    console.log('Age: ' + age);
  }



}
