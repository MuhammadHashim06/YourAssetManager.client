import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth.service';
import { constant } from '../../../core/constant/constant';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Alert } from '../../../shared/reusablecomponents/alert/alert.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
alert: Alert ={
  type:'',
  upermessage:'',
  lowermessage:''
};
isalert = false
NextStep($event: MouseEvent) {
sessionStorage.setItem('ownerdata',JSON.stringify(this.registeruser.value))
this.router.navigateByUrl('/auth/createorganization')
}

setrole($event: MouseEvent) {
  if(this.role=='EMPLOYEE'){
    this.role='ORGANIZATIONOWNER'
  }else if(this.role=='ORGANIZATIONOWNER'){
    this.role='EMPLOYEE'
  }
}
  // Error messages and state variables
  inputerrormessages = constant.inputerrormessage;
  load = false;
  isemailregister = false;
  accountsuccessmessage = constant.register.success.accountsuccess;
  verificationmessage = constant.register.success.verificationmessage;
  private router = inject(Router)

  role='EMPLOYEE'

  // Form group initialization
  registeruser = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    userName: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, this.passwordValidator]),
    requiredRole:new FormControl('')
  });

  constructor(private registerservice: AuthService) {}

  /**
   * Custom validator to ensure password complexity
   */
  passwordValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) {
      return null;
    }
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(value);

    // Check if all password complexity requirements are met
    const valid = hasUpperCase && hasLowerCase && hasNumber && hasSpecialCharacter;
    if (!valid) {
      return { passwordComplexity: true };
    }
    return null;
  }

  /**
   * Handles the form submission and user registration
   * @param $event MouseEvent to prevent default form submission behavior
   */
  verify($event: MouseEvent): void {
    $event.preventDefault();
    if (this.registeruser.valid) {
      this.load = true;
      this.registeruser.controls.requiredRole.setValue(this.role)
      // Perform signup using AuthService
      this.registerservice.signup(this.registeruser.value).subscribe(
        (res) => {
          this.load = false;
          this.isemailregister = true;  // Set flag to indicate email registration success
        },
        (error) => {
          this.load = false;
          this.isalert=true
          this.alert.type= 'error'
          switch(error.status){
            case 403 :{
              this.alert.upermessage='Email already exists';
              this.alert.lowermessage='PLeasr try to login'
              break;
            }
            case 404 : {
              this.alert.upermessage='Invalid Email';
              this.alert.lowermessage='Please Enter a Valid Organization email'
              break;
            }default:{
               this.alert.upermessage='Something went wrong';
              this.alert.lowermessage='Please try again'
            }
          }
        setTimeout(() => {
          this.isalert=false
        }, 3000);
          console.error('An error occurred:', error);  // Optional error handling
        }
      );

      // Reset form fields and state
      this.registeruser.reset();
      this.registeruser.markAsUntouched();
    } else {
      this.registeruser.markAllAsTouched();  // Mark all fields as touched to show validation errors
    }
  }
}
