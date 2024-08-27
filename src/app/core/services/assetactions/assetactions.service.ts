import { Injectable } from '@angular/core';
import { apiEndPoint } from '../../constant/constant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetactionsService {

  private apiendpoint = apiEndPoint.assetactions
  constructor(private http: HttpClient) { }
  requestasset(data: any) {
    return this.http.post(this.apiendpoint.sentrequest, data);
  }
  processAccessRequest(data: any) {
    return this.http.post(`${this.apiendpoint.ProcessAssetRequest}`, data)
  }
  assignasset(data: any): Observable<any> {
    return this.http.post(this.apiendpoint.AssignAsset, data)
  }
  getallrequest():Observable<any>{
    return this.http.get(this.apiendpoint.GetAssetRequestsByUserId)
  }
  cancelassetrequest(id :any){
    return this.http.post(`${this.apiendpoint.CancelRequestAsset}?reqiestId=${id}`,{})
  }
  returnasset(data:any){
    return this.http.post(this.apiendpoint.ReturnAsset,data)
  }

}
