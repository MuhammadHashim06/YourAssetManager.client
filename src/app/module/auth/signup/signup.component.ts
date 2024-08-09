import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth.service';
import { constant } from '../../../core/constant/constant';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  // Error messages and state variables
  inputerrormessages = constant.inputerrormessage;
  load = false;
  isemailregister = false;
  accountsuccessmessage = constant.register.success.accountsuccess;
  verificationmessage = constant.register.success.verificationmessage;

  // Form group initialization
  registeruser = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    userName: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, this.passwordValidator])
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
      
      // Perform signup using AuthService
      this.registerservice.signup(this.registeruser.value).pipe(
        catchError(error => {
          // Handle specific error responses
          if (error.status === 403) {
            this.load = false;
            console.error('Access denied. You do not have permission to perform this action.');
            alert('Access denied. You do not have permission to perform this action.');
          }
          // Propagate other errors
          return throwError(error);
        })
      ).subscribe(
        (res) => {
          this.load = false;
          this.isemailregister = true;  // Set flag to indicate email registration success
        },
        (error) => {
          this.load = false;
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
