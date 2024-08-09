import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iregisteruser } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  register():Observable<Iregisteruser[]>{
    return this.http.get<Iregisteruser[]>('http://localhost:3000/users')
  }
  
}
