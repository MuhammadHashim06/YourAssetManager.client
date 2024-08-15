import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrganizationService } from '../../../core/services/organization/organization.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
orgEmail: any;
orgAddress: any;
orgContact: any;
orgDomain:any;
profilecard($event: MouseEvent) {
  this.isprofile=!this.isprofile
}

  router=inject(Router)
isprofile=false;
constructor(private organization :OrganizationService){}

orgInfo:any
orgName:string=''
orgIcon:string='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  ngOnInit(): void {

    this.organization.getOrganization().pipe(
      catchError(error=>{
        console.error(error)
        this.router.navigateByUrl('dashboard/organization')
        return throwError(error)
      })
    ).subscribe(res=>{
      this.orgInfo=res.responseData.organizations.$values[0]
      if(this.orgIcon=='')
      {
        this.orgIcon='person.svg'
      }
      this.orgName=this.orgInfo.organizationName
      this.orgDomain=this.orgInfo.organizationDomain
      console.log(this.orgInfo);
      
    localStorage.setItem('organization',JSON.stringify(this.orgInfo))
    })
  }

}
