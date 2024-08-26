import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../../core/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.scss'
})
export class UserlistComponent implements OnInit {
showdetail(id: any) {
  this.router.navigateByUrl(`dashboard/user/${id}`)
}

  allusers: Array<any> = []
  constructor(private userservice: UserService,private router:Router) { }
  ngOnInit(): void {

    this.userservice.getalluserS().pipe().subscribe(res => {
      this.allusers = res.responseData.$values
    })
  }


}
