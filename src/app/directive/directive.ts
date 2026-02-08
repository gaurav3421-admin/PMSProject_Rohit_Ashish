import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-directive',
  imports: [FormsModule, CommonModule],
  templateUrl: './directive.html',
  styleUrl: './directive.css',
})
export class Directive implements OnInit {

  product = {
    title: '',
  };

  //productStatus:string = 'Available'; 
  productStatus:string = 'OutofStock'; // 

  _departmentList = [
    { Id: 101, Name: "Computer" },
    { Id: 102, Name: "IT" },
    { Id: 103, Name: "Tablet" },
    { Id: 104, Name: "Desktop" }
  ]

  _productList = [
    { Id: 101, Name: "Laptop", Price: 45000 },
    { Id: 102, Name: "Mobile", Price: 25000 },
    { Id: 103, Name: "Tablet", Price: 15000 },
    { Id: 104, Name: "Desktop", Price: 55000 }
  ]

  isStudentDiv: boolean = true;
  constructor() { };
  ngOnInit(): void {
    // Initialization logic here

  }




}
