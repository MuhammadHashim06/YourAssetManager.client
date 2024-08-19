import { Component, OnInit } from '@angular/core';
import { AssettypeService } from '../../../../../core/services/assettype/assettype.service';
import { catchError, throwError } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-typelist',
  templateUrl: './typelist.component.html',
  styleUrl: './typelist.component.scss'
})
export class TypelistComponent implements OnInit {
savetype() {
  this.isadd=false
  this.service.addassettype(this.assettype.value).pipe().subscribe(res=>{
    console.log(res);
    this.assettype.setValue({
      assetTypeName:'',
      description: ''
    })
    this.getassettype()

  })
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
edit(arg0: any) {
throw new Error('Method not implemented.');
}
dataload: any;
type: any;
constructor(private service:AssettypeService){}
}
