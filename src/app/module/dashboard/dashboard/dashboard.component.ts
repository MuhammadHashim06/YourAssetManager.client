import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrganizationService } from '../../../core/services/organization/organization.service';
import { catchError, throwError } from 'rxjs';
import { UserService } from '../../../core/services/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  currentuser:any
  userData: any;
  orgInfo: any;
  orgName: string = '';
  orgDomain: string = '';
  ProfileIcon: string = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';
  isProfileVisible: boolean = false;

  constructor(
    private router: Router,
    private organizationService: OrganizationService,
    private userservice:UserService
  ) {}

  ngOnInit(): void {
    this.userservice.getmydata().pipe().subscribe(res=>{
      this.currentuser=res.responseData;
      console.log(this.currentuser);
      sessionStorage.setItem('currentuser', JSON.stringify(this.currentuser))
      
    })
    this.userData = sessionStorage.getItem('userData');
    if (this.userData) {
      this.userData = JSON.parse(this.userData);
    }
    this.fetchOrganizationData();
  }

  fetchOrganizationData(): void {
    this.organizationService
      .getOrganization()
      .pipe(
        catchError((error) => {
          console.error(error);
          if (error.status === 404) {
            this.router.navigateByUrl('dashboard/organization');
          }
          return throwError(error);
        })
      )
      .subscribe((res) => {
        if (res.status === 404) {
          this.router.navigateByUrl('dashboard/organization');
        } else {
          this.orgInfo = res.responseData.organizations;
          this.orgName = this.orgInfo.organizationName;
          this.orgDomain = this.orgInfo.organizationDomain;
          sessionStorage.setItem('organization', JSON.stringify(this.orgInfo));
        }
      });
  }

  closeProfile(event: MouseEvent): void {
    event.stopPropagation();
    this.isProfileVisible = false;
  }

  logout(event: MouseEvent): void {
    event.preventDefault();
    sessionStorage.clear();
    this.router.navigate(['auth/login']);
  }

  toggleProfileCard(event: MouseEvent): void {
    event.stopPropagation();
    this.isProfileVisible = !this.isProfileVisible;
  }
}
