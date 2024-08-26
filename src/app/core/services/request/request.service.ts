import { Injectable } from '@angular/core';
import { apiEndPoint } from '../../constant/constant';
import { HttpBackend, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private apiendpoint = apiEndPoint.request
  constructor(private http :HttpClient) { }

  requestasset(data:any){
    return this.http.post(this.apiendpoint.sentrequest, data)
  }
  declinerequest(id:any){
    return this.http.post(`${this.apiendpoint.DeclineAssetRequest}?requestId=${id}`,{})
  }
}
