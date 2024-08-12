import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiEndPoint } from '../../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  apiendpoint=apiEndPoint.vendor
  constructor(private http :HttpClient) { }

  addvendor(data:any){
return this.http.post(this.apiendpoint.CreateVender,data)
  }
}
