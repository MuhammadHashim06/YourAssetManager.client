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
  styleUrls: ['./profile.component.scss'] // Corrected to `styleUrls`
})
export class ProfileComponent implements OnInit {
  // Component properties
  LogData: any;
  imageUrl: string = 'Image.svg';
  selectedImage: any;
  inputErrorMessage = constant.inputerrormessage;
  response = true; // Flag for response state
  load = false; // Flag for loading state
  email: string = ''; // Stores the email input value
  isForget = false; // Flag to toggle forgot password view
  isAlert = false; // Flag for displaying alert

  // Alert data for displaying messages
  alertData: Alert = {
    type: 'success',
    upermessage: 'Successful',
    lowermessage: 'You have successfully logged in'
  };

  // Form group for user data
  Userdata = new FormGroup({
    email: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required)
  });

  constructor(
    private loginService: AuthService,
    private profileService: ProfileService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeUserData();
  }

  private initializeUserData(): void {
    const currentUserString = sessionStorage.getItem('currentuser');
    if (currentUserString) {
      this.LogData = JSON.parse(currentUserString);
      console.log('Current User', this.LogData);
      this.Userdata.setValue({
        email: this.LogData.email,
        userName: this.LogData.userName
      });
      if (this.LogData.imagePath) {
        this.imageUrl = this.LogData.imagePath;
      }
    }
  }

  verifyEmail($event: MouseEvent): void {
    $event.preventDefault();
    this.load = true;
    this.response = false;

    const email = { email: this.email };
    this.loginService.verifyemail(email).pipe(
      catchError(error => {
        this.response = true;
        this.alertData.type = 'error';
        this.isAlert = true;

        switch (error.status) {
          case 404:
            this.alertData.upermessage = 'Login Failed';
            this.alertData.lowermessage = 'Please check your email or password';
            break;
          case 403:
            this.alertData.upermessage = 'Account Deactivated';
            this.alertData.lowermessage = 'Your account has been deactivated by Admin';
            break;
          case 401:
            this.alertData.upermessage = 'Email Not Confirmed';
            this.alertData.lowermessage = 'We have sent an email. Please confirm your email first';
            break;
          default:
            this.alertData.upermessage = 'Something Went Wrong';
            this.alertData.lowermessage = 'Please try again';
            break;
        }

        setTimeout(() => {
          this.isAlert = false;
        }, 3000);

        return throwError(error);
      })
    ).subscribe(
      (res: any) => {
        sessionStorage.setItem('userData', JSON.stringify(res));
        this.load = false;
        this.response = true;
        this.isAlert = true;
        this.alertData.type = 'success';
        this.alertData.upermessage = 'Reset Email Sent';
        this.alertData.lowermessage = 'Please check your email for reset link';

        setTimeout(() => {
          this.router.navigateByUrl('auth');
          this.isAlert = false;
        }, 3000);
      },
      (error: any) => {
        console.error(error);
        this.isAlert = true;
        this.alertData.type = 'error';
        this.alertData.upermessage = 'Something Went Wrong';
        this.alertData.lowermessage = 'Please try again';

        setTimeout(() => {
          this.isAlert = false;
          this.router.navigateByUrl('auth');
        }, 3000);

        this.load = false;
        this.response = true;
      }
    );
  }

  onSelect(event: any): void {
    if (event.target.files) {
      console.log(event.target.files);
      this.selectedImage = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
    }
  }

  save($event: MouseEvent): void {
    $event.preventDefault();
    this.response = false;

    const userName = this.Userdata.controls.userName.value !== this.LogData.userName
      ? this.Userdata.controls.userName.value || ''
      : '';

    this.profileService.updateprofile(userName, this.selectedImage).pipe().subscribe(
      res => {
        this.userService.getmydata().pipe().subscribe(res => {
          this.LogData = res.responseData;
          sessionStorage.setItem('currentuser', JSON.stringify(this.LogData));

          const currentUserString = sessionStorage.getItem('currentuser');
          if (currentUserString) {
            this.LogData = JSON.parse(currentUserString);
            console.log('Current User', this.LogData);
            this.Userdata.setValue({
              email: this.LogData.email,
              userName: this.LogData.userName
            });
            if (this.LogData.imagePath) {
              this.imageUrl = this.LogData.imagePath;
            }
          }
        });

        this.response = true;
        this.isAlert = true;
        this.alertData.type = 'success';
        this.alertData.upermessage = 'Updated Successfully';
        this.alertData.lowermessage = 'Your Account is Updated';

        setTimeout(() => {
          this.isAlert = false;
        }, 3000);

        console.log(res);
      },
      error => {
        this.response = true;
        this.isAlert = true;
        this.alertData.type = 'warning';
        this.alertData.upermessage = 'Update Failed';
        this.alertData.lowermessage = 'Something went wrong';

        setTimeout(() => {
          this.isAlert = false;
        }, 3000);
      }
    );
  }

  forget(): void {
    this.isForget = !this.isForget;
  }
}
