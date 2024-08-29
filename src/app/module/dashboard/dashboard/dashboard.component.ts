import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrganizationService } from '../../../core/services/organization/organization.service';
import { catchError, throwError } from 'rxjs';
import { UserService } from '../../../core/services/user/user.service';
import { BoardService } from '../../../core/services/board/board.service';
import { CategoryService } from '../../../core/services/category/category.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  // Component properties
  categories: Array<any> = [];
  assets: Array<any> = [];
  assettypes: Array<any> = [];
  users: Array<any> = [];
  vendors: Array<any> = [];
  query: any = '';
  tables: any = '-1';
  searchresult: any = [];
  currentuser: any;
  userData: any;
  orgInfo: any;
  orgName: string = '';
  orgDomain: string = '';
  ProfileIcon: string = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';
  isProfileVisible: boolean = false;
  role: any;
  isSearch = false;
  searchcategorieslist: any

  // Constructor for dependency injection
  constructor(
    private router: Router,
    private organizationService: OrganizationService,
    private userservice: UserService,
    private boardservice: BoardService,
    private categoryservice: CategoryService
  ) {
    this.initializeUserData();
    this.fetchOrganizationData();
  }

  // Lifecycle hook: Initialize component
  ngOnInit() {
    this.initializeUserData();
    this.fetchOrganizationData();
    this.getallcategory()
  }

  getallcategory() {
    this.categoryservice.getcategory().subscribe(value => {
      this.searchcategorieslist = value.responseData.$values;
    })
  }
  // Fetch user data and set role
  initializeUserData(): void {
    this.userservice.getmydata().pipe().subscribe(res => {
      this.currentuser = res.responseData;
      sessionStorage.setItem('currentuser', JSON.stringify(this.currentuser));
      let role: Array<any> = this.currentuser.roles.$values;

      if (role.includes('OrganizationOwner')) {
        this.role = 'OrganizationOwner';
      } else if (role.includes('AssetManager')) {
        this.role = 'AssetManager';
      } else {
        this.role = 'Employee';
      }
    });
    this.userData = sessionStorage.getItem('userData');
    if (this.userData) {
      this.userData = JSON.parse(this.userData);
    }
  }

  // Fetch organization data
  fetchOrganizationData(): void {
    this.organizationService.getOrganization().pipe(
      catchError((error) => {
        console.error(error);
        if (error.status === 404) {
          this.router.navigateByUrl('dashboard/organization');
        }
        return throwError(error);
      })
    ).subscribe((res) => {
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

  inputchange($event: any){
    if ($event.target) {
      this.query = $event.target.value;
    }
    this.search(this.query)
  }
  // Search functionality
  search($event: any) {
    if (this.query != null || this.query!='') {
      this.boardservice.search(this.query, this.tables).pipe().subscribe(res => {
        this.searchresult = res.responseData.$values;
        console.log(this.searchresult);
        // this.assets = this.searchresult.assets?.$values || [];
        // this.categories = this.searchresult.assetCategories?.$values || [];
        // this.assettypes = this.searchresult.assetTypes?.$values || [];
        // this.vendors = this.searchresult.vendors?.$values || [];
        // this.users = this.searchresult.users?.$values || [];
      });
    } else {
      this.searchresult = {};
    }
  }

  openAsset(id:any){
    this.toggleSearch()
this.router.navigateByUrl(`dashboard/asset/${id}`)
  }
  // Toggle search visibility
  toggleSearch() {
    this.getallcategory()
    this.isSearch = !this.isSearch;
    this.searchresult=[]
  }

  // Handle table selection
  settable($event: any) {
    this.tables = $event.target.value;
    this.search(this.query);
    console.log(this.tables);
  }

  // Stop event propagation
  stoppropagation($event: MouseEvent) {
    $event.stopPropagation();
  }

  // Toggle profile visibility
  toggleProfileCard(event: MouseEvent): void {
    event.stopPropagation();
    this.isProfileVisible = !this.isProfileVisible;
  }

  // Close profile card
  closeProfile(event: MouseEvent): void {
    event.stopPropagation();
    this.isProfileVisible = false;
  }

  // Logout functionality
  logout(event: MouseEvent): void {
    event.preventDefault();
    sessionStorage.clear();
    this.router.navigate(['auth/login']);
  }
}
