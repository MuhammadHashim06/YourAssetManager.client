import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iregisterresponse, Iregisteruser } from '../../models/user';
import { Observable } from 'rxjs';
import { apiEndPoint } from '../../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 registerapi=apiEndPoint.authentication
  constructor(private http:HttpClient) { }

   signup(registerData:any):Observable<Iregisterresponse>{
    return  this.http.post<Iregisterresponse>(`${this.registerapi.signUp}`,registerData);
  }
  emailconfirm(token:string,email:string):Observable<Iregisterresponse>{
    return this.http.get<Iregisterresponse>(`${this.registerapi.confirmEmail}?token=${token}&email=${email}`)
  }
  login(loginData:any):Observable<Iregisterresponse>{
    return  this.http.post<Iregisterresponse>(`${this.registerapi.signIn}`,loginData);
  }

  verifyemail(email:{}):Observable<Iregisterresponse>{
    return this.http.post<Iregisterresponse>(`${this.registerapi.emailverifyforgetpassword}`,email,)
  }
  resetemail(password:{}):Observable<Iregisterresponse>{
    return this.http.post<Iregisterresponse>(`${this.registerapi.setresetpassword}`,password,)
  }
}
