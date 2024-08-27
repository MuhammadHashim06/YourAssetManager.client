import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrganizationService } from '../../../core/services/organization/organization.service';
import { catchError, throwError } from 'rxjs';
import { UserService } from '../../../core/services/user/user.service';
import { BoardService } from '../../../core/services/board/board.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  categories: Array<any> = []
  assets: Array<any> = []
  assettypes: Array<any> = []
  users: Array<any> = []
  vendors: Array<any> = []
  stoppropagation($event: MouseEvent) {
    $event.stopPropagation();
  }
  settable($event: any) {
    this.tables = $event.target.value
    console.log(this.tables);

  }
  toggleSearch($event: MouseEvent) {
    this.isSearch = !this.isSearch

  }
  isSearch = false

  search($event: any) {
    if ($event.target) {
      this.query = $event.target.value
      console.log($event.target.value || null);
    }
    if (this.query != null) {
      this.boardservice.search(this.query, this.tables).pipe().subscribe(res => {
        this.searchresult = res.responseData
        console.log(this.searchresult);
        if (this.searchresult.assets != null) {
          this.assets = this.searchresult.assets.$values
        }
        if (this.searchresult.assetCategories != null) {
          this.categories = this.searchresult.assetCategories.$values
        }
        if (this.searchresult.assets != null) {
          this.assets = this.searchresult.assets.$values
        }
        if (this.searchresult.assetTypes != null) {
          this.assettypes = this.searchresult.assetTypes.$values
        }
        if (this.searchresult.vendors != null) {
          this.vendors = this.searchresult.vendors.$values
        } if (this.searchresult.users != null) {
          this.users = this.searchresult.users.$values
        }
      })
    } else {
      this.searchresult = {}
    }
  }
  query: any = '';
  tables: any = 'Assets,Categories,Users,AssetTypes,Vendors'
  searchresult: any = {}
  currentuser: any
  userData: any;
  orgInfo: any;
  orgName: string = '';
  orgDomain: string = '';
  ProfileIcon: string = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';
  isProfileVisible: boolean = false;
  role: any

  constructor(
    private router: Router,
    private organizationService: OrganizationService,
    private userservice: UserService,
    private boardservice: BoardService
  ) {
    this.userservice.getmydata().pipe().subscribe(res => {
      this.currentuser = res.responseData;
      console.log(this.currentuser);
      sessionStorage.setItem('currentuser', JSON.stringify(this.currentuser))
      let role: Array<any> = this.currentuser.roles.$values

      if (role.includes('OrganizationOwner')) {
        this.role = 'OrganizationOwner'
      } else if (role.includes('AssetManager')) {
        this.role = 'AssetManager'
      } else {
        this.role = 'Employee'
      }
    })
    this.userData = sessionStorage.getItem('userData');
    if (this.userData) {
      this.userData = JSON.parse(this.userData);
    }
    if (this.role != 'Employee' || this.role != undefined) {
      console.log(this.role);

      this.fetchOrganizationData();
    }
  }


  ngOnInit() {
    this.userservice.getmydata().pipe().subscribe(res => {
      this.currentuser = res.responseData;
      console.log(this.currentuser);
      sessionStorage.setItem('currentuser', JSON.stringify(this.currentuser));
      let role: Array<any> = this.currentuser.roles.$values;

      if (role.includes('OrganizationOwner')) {
        this.role = 'OrganizationOwner';
      } else if (role.includes('AssetManager')) {
        this.role = 'AssetManager';
      } else {
        this.role = 'Employee';
      }
    })
    this.userData = sessionStorage.getItem('userData');
    if (this.userData) {
      this.userData = JSON.parse(this.userData);
    }
    if (this.role != 'Employee' || this.role != undefined) {

      this.fetchOrganizationData();
    }
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
