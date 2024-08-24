import { Component, OnInit } from '@angular/core';
import { AssettypeService } from '../../../../../core/services/assettype/assettype.service';
import { catchError, throwError } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { constant } from '../../../../../core/constant/constant';

@Component({
  selector: 'app-typelist',
  templateUrl: './typelist.component.html',
  styleUrl: './typelist.component.scss'
})
export class TypelistComponent implements OnInit {
  inputerrormessages = constant.inputerrormessage
updatetype() {
  const data={
id:this.id,
assetTypeName:this.assettype.controls['assetTypeName'].value,
description:this.assettype.controls['description'].value

  }
  this.service.updateAssetType(data).pipe().subscribe(data => {
    console.log(data);
    this.getassettype()
    
  })
}
  id=0
savetype() {
  if(this.assettype.valid){
  this.isadd=false
  this.service.addassettype(this.assettype.value).pipe().subscribe(res=>{
    console.log(res);
    this.assettype.setValue({
      assetTypeName:'',
      description: ''
    })
    this.getassettype()
  })
}else
{
  this.assettype.markAllAsTouched()
}

}

  assettype = new FormGroup({
      assetTypeName:new FormControl('',Validators.required),
      description: new FormControl('')
    
  })

  cancel() {
    this.isadd=false
    this.assettype.setValue({
      assetTypeName:'',
      description: ''
    })
}
addnewfield() {
  this.isadd=true
}
isadd=false;
ngOnInit(): void {
  this.getassettype()

}
getassettype(){
  this.service.getallassettype().pipe(
    catchError(error=>{
      return throwError(error)
    })
  ).subscribe(res=>{
    this.type=res.responseData.$values
  })
}
delete(arg0: any) {
  this.service.deleteassettype(arg0).pipe().subscribe(res => {
    console.log(res);
    this.getassettype()
  })
}
edit(index: any) {
  this.id=index
  this.isadd=true
  let asset= this.type.find((t: { id: any; }) => t.id==index);
  this.assettype.setValue({
    assetTypeName:asset.assetTypeName,
    description:asset.description
  })
  
}
dataload: any;
type: any;
constructor(private service:AssettypeService){}
}
