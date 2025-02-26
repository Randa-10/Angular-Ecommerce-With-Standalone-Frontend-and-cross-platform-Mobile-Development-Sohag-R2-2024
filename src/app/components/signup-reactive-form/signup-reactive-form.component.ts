import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup-reactive-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './signup-reactive-form.component.html',
  styleUrl: './signup-reactive-form.component.css',
})
export class SignupReactiveFormComponent {
  userForm: FormGroup;
  constructor(private userServ: UsersService, private fbuilder: FormBuilder) {
    // this.userForm=new FormGroup({
    //   fname:new FormControl('',[Validators.required,Validators.minLength(3)]),
    //   lname:new FormControl('',[Validators.required,Validators.pattern("^[A-Za-z]{3,}$")]),
    //   email:new FormControl('',[Validators.required]),
    //   password:new FormControl('',[Validators.required]),

    // })
    this.userForm = this.fbuilder.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
    });
  }

  get fname() {
    return this.userForm.get('fname');
  }
  get lname() {
    return this.userForm.get('lname');
  }
  AddNewUser() {
    this.userServ.addNewUser(this.userForm.value).subscribe((data) => {
      console.log(data);
    });
  }
}
