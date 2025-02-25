import { Component, inject } from '@angular/core';
import { Iuser } from '../../Models/iuser';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  imports: [FormsModule,CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  // userServices=inject(UsersService)
  userProp:Iuser={} as Iuser
  constructor(
    private userServices:UsersService ,
    private router:Router
  ){

  }
  addNewUser(){
// let U:Iuser={
//   fname:"ali",
//   lname:"ahmed",
//   email:"email@gmial.com",
//   password:"123455"
// }
this.userServices.addNewUser(this.userProp).subscribe((data)=>{
  console.log(data);
 this.router.navigate(['/products'])
})
  }
}
