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
}
