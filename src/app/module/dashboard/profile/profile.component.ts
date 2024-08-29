import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { constant } from '../../../core/constant/constant';
import { ProfileService } from '../../../core/services/profile/profile.service';
import { UserService } from '../../../core/services/user/user.service';
import { catchError, throwError } from 'rxjs';
import { Alert } from '../../../shared/reusablecomponents/alert/alert.component';
import { AuthService } from '../../../core/services/auth/auth.service';

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
  response = true;
  load = false; // Flag for loading state
  email: string = ''; // Stores the email input value
  isforget = false; // Flag to toggle forgot password view
  isalert = false; // Flag for successful login
  // Alert data for displaying messages
  alertData: Alert = {
    type: 'success',
    upermessage: 'Successfull',
    lowermessage: 'You have successfully Logiged in'
  };



  verifyemail($event: MouseEvent): void {
    $event.preventDefault();
    this.load = true;
    this.response=false

    const email = { email: this.email };
    this.loginservice.verifyemail(email).pipe(
      catchError(error => {
        // this.handleError(error);
        this.response=true
        this.alertData.type = 'error'
        this.isalert = true

        switch (error.status) {
          case 404: {
            this.alertData.upermessage = 'Login Failed';
            this.alertData.lowermessage = 'Please check your email or password';
            break;
          }
          case 403: {
            this.alertData.upermessage = 'Account Deactivated';
            this.alertData.lowermessage = 'Your account has been deactivated by Admin';
            break;
          }
          case 401: {
            this.alertData.upermessage = 'Email Not Confirmed';
            this.alertData.lowermessage = 'We have sent an email. Please confirm your email first';
            break;
          }
          default: {
            this.alertData.upermessage = 'Something Went Wrong';
            this.alertData.lowermessage = 'Please try again';
            break; // Optional, but good practice to include in the default case
          }

        }
        setTimeout(() => {
          this.isalert = false

        }, 3000);
        return throwError(error);
      })
    ).subscribe(
      (res: any) => {
        sessionStorage.setItem('userData', JSON.stringify(res))
        this.load = false;
        this.response=true
        this.isalert=true
        this.alertData.type='success'
        this.alertData.upermessage='Reset Email Sent'
        this.alertData.lowermessage='Please check your email for reset link'
        setTimeout(() => {
          this.router.navigateByUrl('auth')
          this.isalert = false
        },3000)
      },
      (error: any) => {
        console.error(error);
        this.isalert = true
        this.alertData.type = 'error'
        this.alertData.upermessage = 'Somthing Went wrong'
        this.alertData.lowermessage = 'Please try again'
        setTimeout(() => {
          this.isalert = false
        this.router.navigateByUrl('auth')

        }, 3000);

        this.load = false;
        this.response=true

      }
    );
  }
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

  constructor(private loginservice: AuthService, private profileservice: ProfileService, private userservice: UserService) { }
  ngOnInit(): void {
    const currentuserstring = sessionStorage.getItem('currentuser')
    if (currentuserstring != null || currentuserstring != undefined) {
      this.LogData = JSON.parse(currentuserstring)
      console.log('Current User', this.LogData);
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
    this.response = false
    let userName = '';
    if (this.Userdata.controls.userName.value != this.LogData.userName) {
      userName = this.Userdata.controls.userName.value || ''
    }
    this.profileservice.updateprofile(userName, this.selectedImage).pipe().subscribe(res => {
      this.userservice.getmydata().pipe().subscribe(res => {
        this.LogData = res.responseData;
        sessionStorage.setItem('currentuser', JSON.stringify(this.LogData))
        const currentuserstring = sessionStorage.getItem('currentuser')
    if (currentuserstring != null || currentuserstring != undefined) {
      this.LogData = JSON.parse(currentuserstring)
      console.log('Current User', this.LogData);
      this.Userdata.setValue({
        email: this.LogData.email,
        userName: this.LogData.userName,
      })
      if (this.LogData.imagePath != null) {
        this.imageUrl = this.LogData.imagePath
      }
    }
      })
      this.response = true
      this.isalert=true
      this.alertData.type='success'
      this.alertData.upermessage='Updated Successfully'
      this.alertData.lowermessage='Your Account is Update'
      setTimeout(() => {
        this.isalert = false
      },3000)
      console.log(res);
    },error=>{
      this.response = true
      this.isalert=true
      this.alertData.type='warning'
      this.alertData.upermessage='Update Failed'
      this.alertData.lowermessage='Somthing went Wrong'
      setTimeout(() => {
        this.isalert = false
      },3000)
    })
  }
  forget(): void {
    this.isforget =!this.isforget;
  }
}
