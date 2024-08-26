import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { constant } from '../../../core/constant/constant';
import { ProfileService } from '../../../core/services/profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {

  LogData: any
  imageUrl: string = 'Image.svg'
  selectedImage: any;
  router = inject(Router);
  inputerrormessage = constant.inputerrormessage

  Userdata = new FormGroup({
    email: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required),
  })

  onselect(event: any) {
    if (event.target.files) {
      console.log(event.target.files);
      this.selectedImage = event.target.files[0]
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result
      }
    }
  }

  constructor(private profileservice: ProfileService) { }
  ngOnInit(): void {
    const currentuserstring = sessionStorage.getItem('currentuser')
    if (currentuserstring != null || currentuserstring != undefined) {
      this.LogData = JSON.parse(currentuserstring)
      console.log('Current User',this.LogData);
      this.Userdata.setValue({
        email: this.LogData.email,
        userName: this.LogData.userName,
      })
      if (this.LogData.imagePath != null) {
        this.imageUrl = this.LogData.imagePath
      }
    }
  }
  Save($event: MouseEvent) {
    $event.preventDefault()
    let userName = '';
    if (this.Userdata.controls.userName.value != this.LogData.userName) {
      userName = this.Userdata.controls.userName.value || ''
    }
    this.profileservice.updateprofile(userName, this.selectedImage).pipe().subscribe(res => {
      console.log(res);
    })
  }
}
