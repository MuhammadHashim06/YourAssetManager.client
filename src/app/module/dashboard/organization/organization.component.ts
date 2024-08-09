import { Component, inject } from '@angular/core';
import { OrganizationService } from '../../../core/services/organization/organization.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, pipe, throwError } from 'rxjs';
import { constant } from '../../../core/constant/constant';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrl: './organization.component.scss'
})
export class OrganizationComponent {
  router=inject(Router);
  inputerrormessage=constant.inputerrormessage
  constructor(private service:OrganizationService){}
  
  organization= new FormGroup({
    organizationName: new FormControl('',Validators.required),
    organizationDomain: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required)
  })

Save($event: MouseEvent) {
  $event.preventDefault()
  
 if(this.organization.valid){
  this.service.setOrganization(this.organization.value).pipe(
    catchError(error=>{

      return throwError(error)
    })
  ).subscribe(res=>{
    console.log(res.responceData)
    this.router.navigateByUrl('/dashboard')
  })
 }else{
  this.organization.markAllAsTouched()
 }
}
}
