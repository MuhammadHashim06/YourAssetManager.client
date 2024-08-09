import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { constant } from '../../../core/constant/constant';
import { AuthService } from '../../../core/services/auth/auth.service';
import { catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-confirmemail',
  templateUrl: './confirmemail.component.html',
  styleUrl: './confirmemail.component.scss'
})
export class ConfirmemailComponent implements OnInit {
  // Loading indicator
  load = false;

  // State variables
  verification = false;
  token = '';
  email = '';
  imageurl = '';
  message: any;

  // Inject HttpClient
  http = inject(HttpClient);

  // Inject required services
  constructor(private route: ActivatedRoute, private service: AuthService) { }

  ngOnInit(): void {
    // Extract query parameters
    this.route.queryParams.subscribe(params => {
      this.token = encodeURIComponent(params['token']);
      this.email = encodeURIComponent(params['email']);
    });

    // Log token and email for debugging
    console.log(this.token);
    console.log(this.email);

    // Set loading state
    this.load = true;

    // Confirm email with the provided token and email
    this.service.emailconfirm(this.token, this.email).pipe(
      catchError(error => {
        // Handle errors
        console.error('An error occurred:', error);
        this.imageurl = 'failed.png'; // Set image URL for failure
        this.message = constant.register.fail; // Set failure message
        this.load = false; // Reset loading state
        return throwError(error); // Rethrow error to handle in subscribe
      })
    ).subscribe(
      (res) => {
        // Handle successful email confirmation
        this.message = constant.register.success; // Set success message
        this.imageurl = 'emails.png'; // Set image URL for success
        console.log(res); // Log response
        this.load = false; // Reset loading state
      },
      (error) => {
        // Optional: This block may be redundant if catchError handles all errors
        console.error('An error occurred in subscribe:', error);
        this.message = constant.register.fail; // Set failure message
        this.imageurl = 'failed.png'; // Set image URL for failure
      }
    );
  }
}



  // this.token=decodeURIComponent(this.route.snapshot.queryParams['token'])
    // this.email=decodeURIComponent(this.route.snapshot.queryParams['email'])