import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // step 1: import ReactiveFormsModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm implements OnInit {
  studentReactiveForm!: FormGroup;

  constructor(private fb: FormBuilder) { } /// Step 2


  ngOnInit(): void {
    this.initializReactiveForm();
  }

  initializReactiveForm() {

    this.studentReactiveForm = new FormGroup({

      fullName: new FormControl('', [Validators.required]),
      age :new FormControl('', [Validators.required, Validators.min(1), Validators.max(100)]),


    });
  }

  onSubmit():void {

    alert('Form submitted');
    if (this.studentReactiveForm.valid) {
      console.log(this.studentReactiveForm.value);
      console.log(this.studentReactiveForm.value.fullName);
      console.log(this.studentReactiveForm.value.age);

    } 
  }



}
