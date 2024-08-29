import { Injectable } from '@angular/core';
import { apiEndPoint } from '../../constant/constant';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private apiendpoint = apiEndPoint.profile
  constructor(private http:HttpClient) { }

  updateprofile(UserName :string , image:File){
    const ProfilePicture = new FormData();
    if(image!=undefined){
      ProfilePicture.append('ProfilePicture', image, image.name);
    }
    
    return this.http.put(`${this.apiendpoint.UpdateUserProfile}?UserName=${UserName}`,ProfilePicture)
  }
}
