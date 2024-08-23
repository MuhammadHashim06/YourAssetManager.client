import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiEndPoint } from '../../constant/constant';
import { Observable, of, shareReplay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor(private http:HttpClient) { }
private apiendpoint=apiEndPoint.asset
private cache = new Map<string, any>();


  getallasset():Observable<any>{
    const cacheKey = 'asset';
    if (this.cache.has(cacheKey)) {
      return of(this.cache.get(cacheKey));
    }else{
    return this.http.get(this.apiendpoint.GetAllAssets).pipe(
      tap(data => this.cache.set(cacheKey, data)),
        shareReplay(1)
    )
    }
  }
  addasset(data:any){
    return this.http.post(this.apiendpoint.CreateAsset,data)
  }
  getassetbyid(id:any):Observable<any>{
    return this.http.get(`${this.apiendpoint.GetAssetById}?assetId=${id}`)
  }
  deleteasset(id:any){
    return this.http.delete(`${this.apiendpoint.DeleteAsset}?assetId=${id}`)
  }
  updateasset(data:any){
return this.http.put(this.apiendpoint.UpdateAsset,data)
}
}
