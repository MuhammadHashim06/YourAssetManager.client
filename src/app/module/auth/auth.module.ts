import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmemailComponent } from './confirmemail/confirmemail.component';
import { AlertComponent } from "../../shared/reusablecomponents/alert/alert.component";
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';


@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    ConfirmemailComponent,
    ResetpasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterLink,
    ReactiveFormsModule,
    NgOptimizedImage,
    AlertComponent,
    FormsModule
]
})
export class AuthModule { }
