import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiEndPoint } from '../../constant/constant';
import { Observable, of, shareReplay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssettypeService {

  private cache = new Map<string, any>();
  private endpoint= apiEndPoint.assettype;
  constructor(private http :HttpClient) { }

  updateAssetType(value: any) {
    return this.http.put(`${this.endpoint.UpdateAssetType}`,value)
  }
  deleteassettype(arg0: any) {
   return this.http.delete(`${this.endpoint.DeleteAssetType}?assetTypeId=${arg0}`)
  }

  getallassettype():Observable<any>{
    const cacheKey = 'assettype';
    if (this.cache.has(cacheKey)) {
      return of(this.cache.get(cacheKey));  
    }else{
    return this.http.get(`${this.endpoint.GetAllAssetTypes}`).pipe(
      tap(data => this.cache.set(cacheKey, data)),
      shareReplay(1)
    )
  }
}
  addassettype(data:any){
    return this.http.post(`${this.endpoint.CreateAssetType}`,data)
  }
}
