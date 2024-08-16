import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiEndPoint } from '../../constant/constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private endpoint= apiEndPoint.category
  constructor(private http:HttpClient) { }

  createcategory(data:any){
   return this.http.post(this.endpoint.CreateAssetCategory,data)
  }
  getcategory():Observable<any>{
    return this.http.get(this.endpoint.GetAllAssetCategories)
  }
  deletecategory(id:any){
    return this.http.delete(`${this.endpoint.DeleteAssetCategory}?AssetCatagoryId=${id}`)
  }
  getcategorybyid(id:number):Observable<any>{
    return this.http.get(`${this.endpoint.GetAssetCategoryById}?AssetCatagoryId=${id}`)
  }
  updatecategory(data:any){
    return this.http.put(`${this.endpoint.UpdateAssetCategory}?AssetCatagoryId=${data.id}`,data)
  }
}

