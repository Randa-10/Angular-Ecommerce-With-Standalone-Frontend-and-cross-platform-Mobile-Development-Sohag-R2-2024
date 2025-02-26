import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {
//4
  userPropSubj:BehaviorSubject<boolean>
  constructor() {
    //5
    this.userPropSubj=new BehaviorSubject<boolean>(false)
   }
//1
  login(userName:string,pass:string){
    //CALL API
let token='12345666'
localStorage.setItem('userToken',token)
//6
this.userPropSubj.next(true)
  }
  //2
  logout( ){
localStorage.removeItem('userToken')
//6
this.userPropSubj.next(false)

  }
//3
 get isUserLogged():boolean{
return (localStorage.getItem('userToken'))?true:false
  }

  //7 
  getUserSbujFun(){
    return this.userPropSubj
  }
}
