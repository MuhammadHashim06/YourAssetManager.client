import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiEndPoint } from '../../constant/constant';
import { Observable, of, shareReplay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private endpoint= apiEndPoint.category
  private cache = new Map<string,any>()
  constructor(private http:HttpClient) { }

  createcategory(data:any){
   return this.http.post(this.endpoint.CreateAssetCategory,data)
  }
  getcategory():Observable<any>{
    const cachekey='category'
    if(this.cache.has('category')){
      return of(this.cache.get('category'))
    }else{
    return this.http.get(this.endpoint.GetAllAssetCategories).pipe(
      tap(data=>this.cache.set(cachekey,data)),
      shareReplay(1)
    )
      }  }
  deletecategory(id:any){
    return this.http.delete(`${this.endpoint.DeleteAssetCategory}?AssetCatagoryId=${id}`)
  }
  getcategorybyid(id:number):Observable<any>{
    return this.http.get(`${this.endpoint.GetAssetCategoryById}?AssetCatagoryId=${id}`)
  }
  updatecategory(data:any):Observable<any>{
    return this.http.put(`${this.endpoint.UpdateAssetCategory}?AssetCatagoryId=${data.id}`,data)
  }
}

