import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { constant } from '../../../core/constant/constant';
import { AuthService } from '../../../core/services/auth/auth.service';
import { catchError, throwError } from 'rxjs';
import { Alert } from '../../../shared/reusablecomponents/alert/alert.component';
import { Router } from '@angular/router';
import { UserService } from '../../../core/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] // Corrected 'styleUrl' to 'styleUrls'
})
export class LoginComponent {
  load = false; // Flag for loading state
  email: string = ''; // Stores the email input value
  isforget = false; // Flag to toggle forgot password view
  isalert = false; // Flag for successful login
  inputerrormessage = constant.inputerrormessage  // Input Error Messages
  // Alert data for displaying messages
  alertData: Alert = {
    type: 'success',
    upermessage: 'Successfull',
    lowermessage:'You have successfully Logiged in'
  };

  // Form group for login
  loginuser = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, this.passwordValidator])
  });

  // Constructor with dependency injection
  constructor(private loginservice: AuthService, private router: Router, private userservice: UserService) { }

  /**
   * Custom validator to ensure password complexity
   */
  passwordValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) return null;

    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(value);

    const valid = hasUpperCase && hasLowerCase && hasNumber && hasSpecialCharacter;
    return valid ? null : { passwordComplexity: true };
  }

  /**
   * Method to handle email verification
   */
  verifyemail($event: MouseEvent): void {
    $event.preventDefault();
    this.load = true;

    const email = { email: this.email };
    this.loginservice.verifyemail(email).pipe(
      catchError(error => {
        // this.handleError(error);
        this.alertData.type='error'
        this.isalert=true

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
          this.isalert=false

        }, 3000);
        return throwError(error);
      })
    ).subscribe(
      res => {
        sessionStorage.setItem('userData', JSON.stringify(res))
        this.load = false;
        alert('Check Your Email');
      },
      error => {
        console.error(error);
        this.isalert=true
        this.alertData.type='error'
        this.alertData.upermessage='Somthing Went wrong'
        this.alertData.lowermessage='Please try again'
        setTimeout(() => {
          this.isalert=false

        }, 3000);

        this.load = false;
      }
    );
  }

  /**
   * Method to handle login
   */
  login($event: MouseEvent): void {
    $event.preventDefault();

    if (this.loginuser.valid) {
      this.load = true;
      this.loginservice.login(this.loginuser.value).subscribe(
        res => {
          this.load = false;
          sessionStorage.setItem('userData', JSON.stringify(res.responseData))
          this.userservice.getmydata().pipe().subscribe(res => {
            let data = res.responseData
            sessionStorage.setItem('currentuser', JSON.stringify(data))
          })
          this.router.navigateByUrl('/dashboard');
        },
        error => {
          this.load = false;
          this.isalert=true
          this.alertData.type='error'
          switch (error.status) {
            case 404: {
              this.alertData.upermessage = 'Login Failed';
              this.alertData.lowermessage = 'Please check your email or password';
              this.isalert=true
  
              break; 
            }
            case 403: {
              this.alertData.upermessage = 'Account Deactivated';
              this.alertData.lowermessage = 'Your account has been deactivated by Admin';
              this.isalert=true
              break; 
            }
            case 401: {
              this.alertData.upermessage = 'Email Not Confirmed';
              this.alertData.lowermessage = 'We have sent an email. Please confirm your email first';
              this.isalert=true
              break; 
            }
            case 400: {
              this.alertData.upermessage = 'Something Went Wrong';
              this.isalert=true
              this.alertData.lowermessage = 'Please try again';
              break;
            }
            
          }
          setTimeout(() => {
            this.isalert=false
  
          }, 5000);
  
          console.error('An error occurred:', error);
        }
      );
      this.loginuser.reset(); // Reset the form on successful login attempt
    } else {
      this.loginuser.markAllAsTouched(); // Mark all fields as touched to show validation errors
    }
  }

  /**
   * Method to handle errors and display appropriate messages
   */
  private handleError(error: any): void {
    this.load = false;
    switch (error.status) {
      case 400:
        alert('Bad Request retry');
        break;
      case 401:
        alert('Email Not Confirmed, Email Confirmation is sent again');
        break;
      case 403:
        alert('Please check your credentials');
        break;
      case 404:
        alert('User Not Found, Please Enter a Valid Email and Try Again');
        break;
      default:
        alert('An unexpected error occurred');
        break;
    }
    console.error(error);
  }

  /**
   * Toggle the forgot password view
   */
  forget(): void {
    this.isforget = true;
  }
}
