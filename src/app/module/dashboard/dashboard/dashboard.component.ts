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

  router=inject(Router)
constructor(private organization :OrganizationService){}
  ngOnInit(): void {

    this.organization.getOrganization().pipe(
      catchError(error=>{
        console.error(error)
        this.router.navigateByUrl('dashboard/organization')
        return throwError(error)
      })
    ).subscribe(res=>{
    localStorage.setItem('organization',JSON.stringify(res))
    })
  }

}
