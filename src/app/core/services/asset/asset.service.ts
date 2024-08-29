import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiEndPoint } from '../../constant/constant';
import { Observable, of, shareReplay, tap, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor(private http: HttpClient) { }
  
  private apiendpoint = apiEndPoint.asset;
  private cache = new Map<string, any>();

  getallasset(): Observable<any> {
    const cacheKey = 'asset';
    // if (this.cache.has(cacheKey)) {
    //   return of(this.cache.get(cacheKey));
    // } else
     {
      return this.http.get(this.apiendpoint.GetAllAssets).pipe(
        tap(data => this.cache.set(cacheKey, data)),
        shareReplay(1)
      );
    }
  }

  addasset(data: any): Observable<any> {
    const cacheKey = 'asset';
    return this.http.post(this.apiendpoint.CreateAsset, data).pipe(
      switchMap(() => this.http.get(this.apiendpoint.GetAllAssets)),
      tap(data => this.cache.set(cacheKey, data)),
      shareReplay(1)
    );
  }

  getassetbyid(id: any): Observable<any> {
    return this.http.get(`${this.apiendpoint.GetAssetById}?assetId=${id}`);
  }

  deleteasset(id: any): Observable<any> {
    const cacheKey = 'asset';
    return this.http.delete(`${this.apiendpoint.DeleteAsset}?assetId=${id}`).pipe(
      switchMap(() => this.http.get(this.apiendpoint.GetAllAssets)),
      tap(data => this.cache.set(cacheKey, data)),
      shareReplay(1)
    );
  }

  updateasset(data: any): Observable<any> {
    const cacheKey = 'asset';
    return this.http.put(this.apiendpoint.UpdateAsset, data).pipe(
      switchMap(() => this.http.get(this.apiendpoint.GetAllAssets)),
      tap(data => this.cache.set(cacheKey, data)),
      shareReplay(1)
    );
  }

updategetdata(){
  const cacheKey = 'asset';
  return this.http.get(this.apiendpoint.GetAllAssets).pipe(
    tap(data => this.cache.set(cacheKey, data)),
      shareReplay(1)
  )
}
getavailabelassetbycategory(id:any):Observable<any>{
return this.http.get(`${this.apiendpoint.GetAvailableAssetsByCatagory}?catagoryId=${id}`)
}


}
