import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiEndPoint } from '../../constant/constant';
import { Observable, of, shareReplay, tap, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssettypeService {

  private cache = new Map<string, any>();
  private endpoint = apiEndPoint.assettype;

  constructor(private http: HttpClient) { }

  updateAssetType(value: any): Observable<any> {
    const cacheKey = 'assettype';
    return this.http.put(`${this.endpoint.UpdateAssetType}`, value).pipe(
      switchMap(() => this.http.get(`${this.endpoint.GetAllAssetTypes}`)),
      tap(data => this.cache.set(cacheKey, data)),
      shareReplay(1)
    );
  }

  deleteassettype(assetTypeId: any): Observable<any> {
    const cacheKey = 'assettype';
    return this.http.delete(`${this.endpoint.DeleteAssetType}?assetTypeId=${assetTypeId}`).pipe(
      switchMap(() => this.http.get(`${this.endpoint.GetAllAssetTypes}`)),
      tap(data => this.cache.set(cacheKey, data)),
      shareReplay(1)
    );
  }

  getallassettype(): Observable<any> {
    const cacheKey = 'assettype';
    if (this.cache.has(cacheKey)) {
      return of(this.cache.get(cacheKey));  
    } else {
      return this.http.get(`${this.endpoint.GetAllAssetTypes}`).pipe(
        tap(data => this.cache.set(cacheKey, data)),
        shareReplay(1)
      );
    }
  }

  addassettype(data: any): Observable<any> {
    const cacheKey = 'assettype';
    return this.http.post(`${this.endpoint.CreateAssetType}`, data).pipe(
      switchMap(() => this.http.get(`${this.endpoint.GetAllAssetTypes}`)),
      tap(data => this.cache.set(cacheKey, data)),
      shareReplay(1)
    );
  }

  updateassettypedata(): Observable<any> {
    const cacheKey = 'assettype';
    return this.http.get(`${this.endpoint.GetAllAssetTypes}`).pipe(
      tap(data => this.cache.set(cacheKey, data)),
      shareReplay(1)
    );
  }
}
