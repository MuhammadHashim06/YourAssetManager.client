import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiEndPoint } from '../../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class AssettypeService {

  private endpoint= apiEndPoint.assettype
  constructor(private http :HttpClient) { }

  getallassettype(){
    return this.http.get(`${this.endpoint.GetAllAssetTypes}`)
  }
  addassettype(data:any){
    return this.http.post(`${this.endpoint.CreateAssetType}`,data)
  }
}
