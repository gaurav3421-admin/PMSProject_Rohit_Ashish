import { Component } from '@angular/core';
import { RouterLink} from '@angular/router' 

@Component({
  selector: 'app-datatypes',
  imports: [  ],
  templateUrl: './datatypes.html',
  styleUrl: './datatypes.css',
})
export class Datatypes {

   _username:string='';
   _email:string='';
   _age:number=0;

  constructor() {}; 

   // Methods

   getUserData() {
      return {
         username: this._username,
         email: this._email,
         age: this._age
      };
   }

   setUserData(username: string, email: string, age: number) {
      this._username = username;
      this._email = email;
      this._age = age;
   }

}
