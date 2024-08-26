import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../../../core/services/user/user.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrl: './userdetail.component.scss'
})
export class UserdetailComponent implements OnInit {

  Activestatus:boolean=true
ChangeActiveStatus() {
  const id ={ "id":this.id}

  if(this.Activestatus){
  this.userservice.deactiveuser(id).subscribe((response) => {
    this.route.navigateByUrl('dashboard/user')
  })}else{
    this.userservice.activeuser(id).pipe().subscribe(res=>{
      this.route.navigateByUrl('dashboard/user')
    })
  }
}
Setrole($event: MouseEvent) {
  $event.preventDefault()
  const id ={ "id":this.id}
if(this.assignedrole=='AssetManager'){
  this.userservice.dismissasassetmanager(id).pipe().subscribe(res=>{
  this.route.navigateByUrl('dashboard/user')
  })
}else{
  this.userservice.assignasassetmanager(id).pipe().subscribe(res=>{
    this.route.navigateByUrl('dashboard/user')
  })
}
}
  roles: Array<any> = []
  assignedrole: any
  profilephoto: string = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'

  id = ''
  userdetail: any
  constructor(private activedrouter: ActivatedRoute, private userservice: UserService, private route : Router) {
    this.id = this.activedrouter.snapshot.params['id']
    console.log(typeof(this.id));
    
  }
  ngOnInit(): void {
    if (this.id != '' && this.id != undefined) {
      this.userservice.getuserbyID(this.id).pipe().subscribe(res => {
        this.userdetail = res.responseData
        console.log(this.userdetail);
        this.roles = this.userdetail.roles.$values
        this.assignedrole = this.userdetail.roles.$values.includes('AssetManager') ? 'AssetManager':'Employee'
        this.Activestatus=this.userdetail.activeUser

      })
    }
  }

}
