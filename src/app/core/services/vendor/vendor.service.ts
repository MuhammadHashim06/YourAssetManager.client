import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiEndPoint } from '../../constant/constant';
import { Observable, of, shareReplay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  
  private cache = new Map<string,any>()
  private apiendpoint = apiEndPoint.vendor
  constructor(private http: HttpClient) { }

  addvendor(data: any) {
    return this.http.post(this.apiendpoint.CreateVender, data)
  }
  getvendors(): Observable<any> {
    const cacheKey = 'vendors'
    if (this.cache.has(cacheKey)) {
      return of(this.cache.get(cacheKey))
    }else{
    return this.http.get<any>(this.apiendpoint.GetAllVenders).pipe(
      tap(data => this.cache.set(cacheKey,data)),
      shareReplay(1),
    );
  }
}
  deletevender(arg0: any) {
    return this.http.delete(`${this.apiendpoint.DeleteVender}?vendorId=${arg0}`)
  }
  getvendorbyId(arg0: any):Observable<any> {
    return this.http.get(`${this.apiendpoint.GetVenderById}?vendorId=${arg0}`)
  }
  updatevendor(data:any):Observable<any>{
    return this.http.post(`${this.apiendpoint.UpdateVender}`,data)
  }
}
