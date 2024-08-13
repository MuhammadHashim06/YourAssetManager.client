import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiEndPoint } from '../../constant/constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  
  private apiendpoint = apiEndPoint.vendor
  constructor(private http: HttpClient) { }

  addvendor(data: any) {
    return this.http.post(this.apiendpoint.CreateVender, data)
  }
  getvendors(): Observable<any> {
    return this.http.get<any>(this.apiendpoint.GetAllVenders)
  }
  deletevender(arg0: any) {
    return this.http.post(`${this.apiendpoint.DeleteVender}?venderId=${arg0}`, '')
  }
  getvendorbyId(arg0: any):Observable<any> {
    return this.http.get(`${this.apiendpoint.GetVenderById}?venderId=${arg0}`)
  }
  updatevendor(data:any):Observable<any>{
    return this.http.post(`${this.apiendpoint.UpdateVender}`,data)
  }
}
