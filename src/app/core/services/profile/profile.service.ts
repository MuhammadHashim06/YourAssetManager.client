import { Injectable } from '@angular/core';
import { apiEndPoint } from '../../constant/constant';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private apiendpoint = apiEndPoint.profile
  constructor(private http:HttpClient) { }

  updateprofile(userName :string , image:File){
    const formData = new FormData();
    formData.append('ProfilePicture', image, image.name);
    return this.http.post(`${this.apiendpoint.UpdateUserProfile}?UserName=${userName}`,formData)
  }
}
