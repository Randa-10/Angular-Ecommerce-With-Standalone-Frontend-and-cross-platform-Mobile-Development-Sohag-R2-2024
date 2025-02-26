import { Component, inject, OnInit } from '@angular/core';
import { AuthUserService } from '../../services/auth-user.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit{

isUserLoggedInCom:boolean=false
  userAuth=inject(AuthUserService)

    ngOnInit(): void {
  this.isUserLoggedInCom=this.userAuth.isUserLogged
  }
  loginInCom(){
this.userAuth.login("ALI","2222")
this.isUserLoggedInCom=this.userAuth.isUserLogged  //

  }
  logoutInCom(){
    this.userAuth.logout()
    this.isUserLoggedInCom=this.userAuth.isUserLogged  //

  }
}
