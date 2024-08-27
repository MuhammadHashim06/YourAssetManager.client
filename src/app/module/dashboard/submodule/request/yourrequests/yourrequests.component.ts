import { Component } from '@angular/core';
import { AssetactionsService } from '../../../../../core/services/assetactions/assetactions.service';

@Component({
  selector: 'app-yourrequests',
  templateUrl: './yourrequests.component.html',
  styleUrl: './yourrequests.component.scss'
})
export class YourrequestsComponent {
  requestDescription : string = '';

sendrequest($event: MouseEvent) {

  const requestDescription ={ requestDescription:this.requestDescription}
  this.assetactionservice.requestasset(requestDescription).pipe().subscribe(res=>{
    console.log(res);
  })
}


constructor(private assetactionservice : AssetactionsService){}

  RequestAsset():void 
  {
    
  }
}
