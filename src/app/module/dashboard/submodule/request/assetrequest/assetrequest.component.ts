import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../../../../core/services/board/board.service';
import { RequestService } from '../../../../../core/services/request/request.service';


@Component({
  selector: 'app-assetrequest',
  templateUrl: './assetrequest.component.html',
  styleUrl: './assetrequest.component.scss'
})
export class AssetrequestComponent implements OnInit {

  stoppropagation($event: MouseEvent) {
    $event.stopPropagation();
  }
  categorylist: Array<any> = []
  assetslist: Array<any> = []
  selectedrequestid = 0
  selectedrequest: any
  getbyid(arg0: any) {

    this.selectedrequestid = arg0;
    this.selectedrequest = this.allrequest.find(r => r.requestId == this.selectedrequestid)
    console.log(this.selectedrequest);

    this.togglemodel()

  }
  togglemodel() {
    this.ismodel = !this.ismodel
  }
  ismodel = false
  declinerequest(id: any) {
    this.requestservice.declinerequest(id).pipe().subscribe(res => {
      this.getassetrequests()
    })

  }

  constructor(private dashboardservice: BoardService, private requestservice: RequestService) { }
  allrequest: Array<any> = []
  ngOnInit(): void {
    this.getassetrequests()
  }
  getassetrequests() {
    this.dashboardservice.getallrequests().pipe().subscribe(res => {
      this.allrequest = res.responseData.$values
      console.log(this.allrequest);
    })
  }
}
