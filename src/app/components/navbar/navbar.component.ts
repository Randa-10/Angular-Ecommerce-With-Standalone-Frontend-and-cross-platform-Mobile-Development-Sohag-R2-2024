import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthUserService } from '../../services/auth-user.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  userAuth=inject(AuthUserService)
isUserLoggedInNav:boolean=false 
 ngOnInit(): void {
// this.isUserLoggedInNav=this.userAuth.isUserLogged
this.userAuth.getUserSbujFun().subscribe((data)=>{
  this.isUserLoggedInNav=data
})

  }
}
