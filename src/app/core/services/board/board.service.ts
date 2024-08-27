import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiEndPoint } from '../../constant/constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private apiendpoint = apiEndPoint.dashboard
  constructor(private http :HttpClient) { }
  getallstats():Observable<any>{
    return this.http.get(this.apiendpoint.GetDashBoardStatiticsData);
  }
  getallrequests():Observable<any>{
return this.http.get(this.apiendpoint.GetAllAssetRequests)
  }
  getpendingrequests():Observable<any>{
    return this.http.get(this.apiendpoint.GetAllPendingAssetRequests)
  }
  search(query:any,tables:any):Observable<any>{
    tables=encodeURIComponent(tables)
    return this.http.get(`${this.apiendpoint.search}?query=${query}&tables=${tables}`)
  }
}
