import { Component, Input, OnInit } from '@angular/core';
import { menu } from '../../../core/constant/constant';
import { UserService } from '../../../core/services/user/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() role: any; // Input property for role
  currentUser: any;
  filteredMenu: Array<any> = []; // Filtered menu based on user role

  constructor(private userService: UserService) {
    // Initialize the component by fetching user data and filtering menu
    this.initializeUserData();
  }

  ngOnInit(): void {
    // Lifecycle hook for additional initialization if needed
  }

  private initializeUserData(): void {
    // Fetch the current user data from the service
    this.userService.getmydata().subscribe(res => {
      this.currentUser = res.responseData;
      const roles: Array<any> = this.currentUser.roles.$values;
      console.log('User roles:', roles);

      // Determine the user's role
      if (roles.includes('OrganizationOwner')) {
        this.role = 'OrganizationOwner';
      } else if (roles.includes('AssetManager')) {
        this.role = 'AssetManager';
      } else {
        this.role = 'Employee';
      }

      console.log('Current user role:', this.role);

      // Filter the menu based on the user's role
      this.filteredMenu = menu.filter(m => m.role.includes(this.role));
      console.log('Filtered menu:', this.filteredMenu);
    });
  }
}
