import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from '../Models/iuser';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
httpHeaders={}
  constructor(
    private http:HttpClient
  ) {
    this.httpHeaders={headrs:new HttpHeaders({
      'Content-Type':'application/json',
    
    })}
   }

  addNewUser(newUser:Iuser):Observable<Iuser>{
    return this.http.post<Iuser>(`${environment.baseUrl}/users`,newUser,
      this.httpHeaders
    )
  }
}
