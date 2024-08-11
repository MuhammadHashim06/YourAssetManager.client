import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiEndPoint } from '../../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  endpoint= apiEndPoint.category
  constructor(private http:HttpClient) { }

  createcategory(data:any){
   return this.http.post(this.endpoint.CreateAssetCategory,data)
  }
}
