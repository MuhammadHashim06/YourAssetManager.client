import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { constant } from '../../../core/constant/constant';
import { catchError, throwError } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']  // Fixed to styleUrls
})
export class ResetpasswordComponent {
  load = false;                 // Loader state
  passwordmatch: string = '';   // Error message for password mismatch

  // Injecting Router and ActivatedRoute
  router = inject(Router);
  activeroute = inject(ActivatedRoute);

  // Form group for password and confirm password fields
  userPassword = new FormGroup({
    password: new FormControl('', [Validators.required, this.passwordValidator]),
    confirmpassword: new FormControl('', [Validators.required, this.passwordValidator])
  });

  // Error messages from constants
  inputerrormessages = constant.inputerrormessage;

  constructor(private service: AuthService) { }

  /**
   * Sets the new password if the form is valid and passwords match.
   * @param $event - The mouse event triggered by form submission.
   */
  SetPassword($event: MouseEvent): void {
    $event.preventDefault();
    this.load = true;

    if (this.userPassword.valid) {
      // Check if passwords match
      if (this.userPassword.controls['password'].value === this.userPassword.controls['confirmpassword'].value) {
        // Create the password reset object
        const password = {
          newPassword: this.userPassword.controls['password'].value,
          confirmedNewPassword: this.userPassword.controls['confirmpassword'].value,
          email: this.activeroute.snapshot.queryParams['email'],
          token: this.activeroute.snapshot.queryParams['token']
        };
        console.log(password);

        // Call the service to reset the password
        this.service.resetemail(password).pipe(
          catchError(error => {
            console.error(error);
            alert('Confirmation Failed');
            this.load = false;
            return throwError(error);
          })
        ).subscribe(res => {
          console.log(res);
          this.load = false;
          this.router.navigateByUrl('/auth/login'); // Navigate to login page
        });
      } else {
        // Set error message if passwords do not match
        this.passwordmatch = this.inputerrormessages.passwordmatch;
        this.load = false; // Stop loader if passwords do not match
      }
    } else {
      // Mark all fields as touched if the form is invalid
      this.userPassword.markAllAsTouched();
      this.load = false; // Stop loader if form is invalid
    }
  }

  /**
   * Validates the complexity of the password.
   * @param control - The form control for password.
   * @returns ValidationErrors or null.
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

    const valid = hasUpperCase && hasLowerCase && hasNumber && hasSpecialCharacter;
    if (!valid) {
      return { passwordComplexity: true };
    }
    return null;
  }
}
