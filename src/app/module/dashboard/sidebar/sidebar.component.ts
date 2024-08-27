import { Component, Input, OnInit } from '@angular/core';
import { menu } from '../../../core/constant/constant';
import { UserService } from '../../../core/services/user/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

  // @Input() 
  role: any

  currentuser: any
  menu = menu
  filteredmenu: Array<any> = []
  // role: any
  constructor(private userservice: UserService) {
    console.log(this.role)
    var roles: Array<any>
    // const datastring = sessionStorage.getItem('currentuser')
    // if (datastring != undefined || datastring != null) {
    //   this.currentuser = JSON.parse(datastring)
    //   roles  = this.currentuser.roles.$values
    //   console.log(roles);

    // if (roles.includes('OrganizationOwner')) {
    //   this.role = 'OrganizationOwner'
    // } else if (roles.includes('AssetManager')) {
    //   this.role = 'AssetManager'
    // } else {

    //   this.role = 'Employee'
    // }
    // }
    this.userservice.getmydata().pipe().subscribe(res => {
      this.currentuser = res.responseData
      roles = this.currentuser.roles.$values
      console.log(roles);
      if (roles.includes('OrganizationOwner')) {
        this.role = 'OrganizationOwner'
      } else if (roles.includes('AssetManager')) {
        this.role = 'AssetManager'
      } else {
        this.role = 'Employee'
      }
      console.log(this.currentuser)
      console.log("Curent user rolw", this.role);
      menu.forEach(m => {
        if (m.role.includes(this.role)) {
          this.filteredmenu.push(m)
        }
      })
    })


  }
  ngOnInit(): void {


  }
}
