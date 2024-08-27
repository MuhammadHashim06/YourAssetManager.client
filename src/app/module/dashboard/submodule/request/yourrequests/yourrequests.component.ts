import { Component } from '@angular/core';
import { AssetactionsService } from '../../../../../core/services/assetactions/assetactions.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { constant } from '../../../../../core/constant/constant';

@Component({
  selector: 'app-yourrequests',
  templateUrl: './yourrequests.component.html',
  styleUrl: './yourrequests.component.scss'
})
export class YourrequestsComponent {
cancelrequest(id:any) {
this.assetactionservice.cancelassetrequest(id).pipe().subscribe(res=>{
  this.getallrequest()
})
}
  requestdetail=new FormGroup({
    requestDescription : new FormControl('',Validators.required)
  })
 
inputerrormessage=constant.inputerrormessage
sendrequest($event: MouseEvent) {
  
  if(this.requestdetail.invalid){
    this.requestdetail.markAllAsTouched()
  }else{
  this.assetactionservice.requestasset(this.requestdetail.value).pipe().subscribe(res=>{
    console.log(res);
    this.getallrequest()
    this.requestdetail.reset()
  })}
}
allrequest:any

constructor(private assetactionservice : AssetactionsService){this.getallrequest() }

  getallrequest() 
  {
    this.assetactionservice.getallrequest().pipe().subscribe(res=>{
      this.allrequest=res.responseData.$values
      console.log(this.allrequest);
      
    })
  }
}
