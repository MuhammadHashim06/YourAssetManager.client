import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiEndPoint } from '../../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

private apiendpoint=apiEndPoint.organizationManagement
  constructor(private http :HttpClient) { }

  getOrganization():Observable<any>{
    return this.http.get(this.apiendpoint.getOrganizationsInfo)
  }
  setOrganization(data:any):Observable<any>{
    return this.http.post(this.apiendpoint.createOrganization,data)
  }
}
