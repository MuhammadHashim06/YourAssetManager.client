import { Component } from '@angular/core';
import { RequestService } from '../../../../../core/services/request/request.service';

@Component({
  selector: 'app-yourrequests',
  templateUrl: './yourrequests.component.html',
  styleUrl: './yourrequests.component.scss'
})
export class YourrequestsComponent {
  requestDescription : string = '';

sendrequest($event: MouseEvent) {

  const requestDescription ={ requestDescription:this.requestDescription}
  this.requestservice.requestasset(requestDescription).pipe().subscribe(res=>{
    console.log(res);
  })
}


constructor(private requestservice : RequestService){}

  RequestAsset():void 
  {
    
  }
}
