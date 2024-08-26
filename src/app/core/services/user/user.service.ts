import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iregisteruser } from '../../models/user';
import { apiEndPoint } from '../../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiendpoint = apiEndPoint.user
  constructor(private http:HttpClient) { }

  getalluserS():Observable<any>{
    return this.http.get(`${this.apiendpoint.GetAllUser}`)
  }
  getuserbyID(id:any):Observable<any>{
    return this.http.get(`${this.apiendpoint.GetUserById}?targetUserId=${id}`)
  }
  activeuser(id:any){
    return this.http.post(this.apiendpoint.ActivateAccount,id)
  }
  deactiveuser(id:any){
    return this.http.post(this.apiendpoint.DeactivateAccount,id)

  }
  assignasassetmanager(id:any){
    return this.http.post(this.apiendpoint.AssignAssetManager,id)

  }
  dismissasassetmanager(id:any){
    return this.http.post(this.apiendpoint.DismissAssetManage,id)
  }
  getmydata():Observable<any>{
    return this.http.get(`${this.apiendpoint.GetMyData}`)
  }  
}
