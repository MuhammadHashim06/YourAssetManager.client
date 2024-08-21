import { Component, inject, OnInit } from '@angular/core';
import { OrganizationService } from '../../../core/services/organization/organization.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, pipe, throwError } from 'rxjs';
import { constant } from '../../../core/constant/constant';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{
  onselect(event: any) {
    if (event.target.files) {
      console.log(event.target.files);
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result
      }
    }
  }

  imageUrl: string = 'Image.svg'


  router=inject(Router);
  inputerrormessage=constant.inputerrormessage
  constructor(private service:OrganizationService){}
  ngOnInit(): void {
    const userDatastring =sessionStorage.getItem('userData')
    if(userDatastring!=null || userDatastring!=undefined){

    
    this.userData= JSON.parse(userDatastring)
    console.log(this.userData);
    this.Userdata.setValue({
      email:this.userData.email,
      userName:this.userData.userName,
    })
    }
  }
 userData:any 
  Userdata= new FormGroup({
    email: new FormControl('',Validators.required),
    userName: new FormControl('',Validators.required),
  })

Save($event: MouseEvent) {
  $event.preventDefault()
  
//  if(this.Userdata.valid){
//   this.service.setOrganization(this.Userdata.value).pipe(
//     catchError(error=>{

//       return throwError(error)
//     })
//   ).subscribe(res=>{
//     console.log(res.responceData)
//     this.router.navigateByUrl('/dashboard')
//   })
//  }else{
//   this.Userdata.markAllAsTouched()
//  }
}





}
