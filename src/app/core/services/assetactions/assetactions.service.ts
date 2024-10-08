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
  fulfilledRequest(data: any) {
    return this.http.post(`${this.apiendpoint.FulFillAssetRequest}`, data)
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
  declinerequest(data:any){
return this.http.post(this.apiendpoint.DeclineAssetRequest,data)
  }

  retireasset(data: any): Observable<any> {
    return this.http.post(this.apiendpoint.RetireAsset, data)
  }
  returnfrommaintainance(data: any): Observable<any> {
    return this.http.post(this.apiendpoint.ReturnFromMaintenance, data)
  }
  sendformaintainance(data: any): Observable<any> {
    return this.http.post(this.apiendpoint.SendForMaintenance, data)
  }

}
