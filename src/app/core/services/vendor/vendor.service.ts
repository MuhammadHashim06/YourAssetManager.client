import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiEndPoint } from '../../constant/constant';
import { Observable, of, shareReplay, tap, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  private cache = new Map<string, any>();
  private apiendpoint = apiEndPoint.vendor;

  constructor(private http: HttpClient) { }

  addvendor(data: any): Observable<any> {
    const cacheKey = 'vendors';
    return this.http.post(this.apiendpoint.CreateVender, data).pipe(
      switchMap(() => this.http.get(this.apiendpoint.GetAllVenders)),
      tap(updatedData => this.cache.set(cacheKey, updatedData)),
      shareReplay(1)
    );
  }

  getvendors(): Observable<any> {
    const cacheKey = 'vendors';
    if (this.cache.has(cacheKey)) {
      return of(this.cache.get(cacheKey));
    } else {
      return this.http.get<any>(this.apiendpoint.GetAllVenders).pipe(
        tap(data => this.cache.set(cacheKey, data)),
        shareReplay(1)
      );
    }
  }

  deletevender(id: any): Observable<any> {
    const cacheKey = 'vendors';
    return this.http.delete(`${this.apiendpoint.DeleteVender}?vendorId=${id}`).pipe(
      switchMap(() => this.http.get(this.apiendpoint.GetAllVenders)),
      tap(updatedData => this.cache.set(cacheKey, updatedData)),
      shareReplay(1)
    );
  }

  getvendorbyId(id: any): Observable<any> {
    return this.http.get(`${this.apiendpoint.GetVenderById}?vendorId=${id}`);
  }

  updatevendor(data: any): Observable<any> {
    const cacheKey = 'vendors';
    return this.http.post(`${this.apiendpoint.UpdateVender}`, data).pipe(
      switchMap(() => this.http.get(this.apiendpoint.GetAllVenders)),
      tap(updatedData => this.cache.set(cacheKey, updatedData)),
      shareReplay(1)
    );
  }

  updatevendordata(): Observable<any> {
    const cacheKey = 'vendors';
    return this.http.get<any>(this.apiendpoint.GetAllVenders).pipe(
      tap(data => this.cache.set(cacheKey, data)),
      shareReplay(1)
    );
  }
}
