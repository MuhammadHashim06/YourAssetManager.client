import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiEndPoint } from '../../constant/constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor(private http:HttpClient) { }
private apiendpoint=apiEndPoint.asset
  getallasset():Observable<any>{
    return this.http.get(this.apiendpoint.GetAllAssets)
  }
  addasset(data:any){
    return this.http.post(this.apiendpoint.CreateAsset,data)
  }
}
