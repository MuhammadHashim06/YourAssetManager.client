import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiEndPoint } from '../../constant/constant';
import { Observable, of, shareReplay, tap, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private endpoint = apiEndPoint.category;
  private cache = new Map<string, any>();

  constructor(private http: HttpClient) { }

  createcategory(data: any): Observable<any> {
    const cacheKey = 'category';
    return this.http.post(this.endpoint.CreateAssetCategory, data).pipe(
      switchMap(() => this.http.get(this.endpoint.GetAllAssetCategories)),
      tap(data => this.cache.set(cacheKey, data)),
      shareReplay(1)
    );
  }

  getcategory(): Observable<any> {
    const cacheKey = 'category';
    if (this.cache.has(cacheKey)) {
      return of(this.cache.get(cacheKey));
    } else {
      return this.http.get(this.endpoint.GetAllAssetCategories).pipe(
        tap(data => this.cache.set(cacheKey, data)),
        shareReplay(1)
      );
    }
  }

  deletecategory(id: any): Observable<any> {
    const cacheKey = 'category';
    return this.http.delete(`${this.endpoint.DeleteAssetCategory}?AssetCatagoryId=${id}`).pipe(
      switchMap(() => this.http.get(this.endpoint.GetAllAssetCategories)),
      tap(data => this.cache.set(cacheKey, data)),
      shareReplay(1)
    );
  }

  getcategorybyid(id: number): Observable<any> {
    return this.http.get(`${this.endpoint.GetAssetCategoryById}?AssetCatagoryId=${id}`);
  }

  updatecategory(data: any): Observable<any> {
    const cacheKey = 'category';
    return this.http.put(`${this.endpoint.UpdateAssetCategory}?AssetCatagoryId=${data.id}`, data).pipe(
      switchMap(() => this.http.get(this.endpoint.GetAllAssetCategories)),
      tap(updatedData => this.cache.set(cacheKey, updatedData)),
      shareReplay(1)
    );
  }

  // updatecategorydata(): Observable<any> {
  //   const cacheKey = 'category';
  //   return this.http.get(this.endpoint.GetAllAssetCategories).pipe(
  //     tap(data => this.cache.set(cacheKey, data)),
  //     shareReplay(1)
  //   );
  // }
}
