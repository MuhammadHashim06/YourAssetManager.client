import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiEndPoint } from '../../constant/constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssettypeService {
  deleteassettype(arg0: any) {
   return this.http.delete(`${this.endpoint.DeleteAssetType}?assetTypeId=${arg0}`)
  }

  private endpoint= apiEndPoint.assettype
  constructor(private http :HttpClient) { }

  getallassettype():Observable<any>{
    return this.http.get(`${this.endpoint.GetAllAssetTypes}`)
  }
  addassettype(data:any){
    return this.http.post(`${this.endpoint.CreateAssetType}`,data)
  }
}
