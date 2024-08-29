import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { constant } from '../../../../../core/constant/constant';
import { VendorService } from '../../../../../core/services/vendor/vendor.service';
import { catchError, throwError } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Alert } from '../../../../../shared/reusablecomponents/alert/alert.component';

@Component({
  selector: 'app-addvendor',
  templateUrl: './addvendor.component.html',
  styleUrl: './addvendor.component.scss',
})
export class AddvendorComponent implements OnInit {
  alert: Alert = {
    type: '',
    upermessage: '',
    lowermessage: '',
  };
  id = 0;
  editvender: any;
  response = true;
  isalert = false;
  constructor(
    private service: VendorService,
    private router: Router,
    private active: ActivatedRoute
  ) {
    if (this.active.snapshot.queryParams['id']) {
      this.id = this.active.snapshot.queryParams['id'];
    }
  }
  ngOnInit(): void {
    if (this.id !== 0) {
      this.response = false;
      this.service
        .getvendorbyId(this.id)
        .pipe(
          catchError((error) => {
            this.response = true;

            return throwError(error);
          })
        )
        .subscribe({
          next: (res) => {
            this.response = true;
            this.editvender = res.responseData;
            this.vendorinfo.setValue({
              name: this.editvender.name,
              email: this.editvender.email,
              officeAddress: this.editvender.officeAddress,
              phoneNumber: this.editvender.phoneNumber,
            });
          },
        });
    }
  }

  Savevendor($event: MouseEvent) {
    if (this.vendorinfo.invalid) {
      this.vendorinfo.markAllAsTouched();
    } else {
      this.response = false;
      const updateddata = {
        id: this.id,
        name: this.vendorinfo.controls['name'].value,
        email: this.vendorinfo.controls['email'].value,
        officeAddress: this.vendorinfo.controls['officeAddress'].value,
        phoneNumber: this.vendorinfo.controls['phoneNumber'].value,
      };
      this.service.updatevendor(updateddata).subscribe(
        (res) => {
          this.response = true;
          this.isalert = true;
          (this.alert.type = 'success'),
            (this.alert.upermessage = 'Added Successfully'),
            (this.alert.lowermessage = 'Vendor has been Added Successfully');
          setTimeout(() => {
            this.isalert = false;
            this.router.navigateByUrl('dashboard/vendor');
          }, 3000);
        },
        (error) => {
          this.isalert = true;
          if (error.status == 401) {
            (this.alert.type = 'error'),
              (this.alert.upermessage = 'Unauthorized'),
              (this.alert.lowermessage = 'You donot have Permission');
          } else {
            (this.alert.type = 'error'),
              (this.alert.upermessage = 'Something went wrong'),
              (this.alert.lowermessage = 'Pleasr try again later');
          }
          setTimeout(() => {
            this.isalert = false;
          }, 3000);
        }
      );
    }
  }

  Addvendor($event: MouseEvent) {
    if (this.vendorinfo.invalid) {
      this.vendorinfo.markAllAsTouched();
    } else {
      this.response = false;
      this.service.addvendor(this.vendorinfo.value).subscribe(
        (res) => {
          this.response = true;
          (this.isalert = true),
            (this.alert.type = 'success'),
            (this.alert.upermessage = 'Added Successfully'),
            (this.alert.lowermessage = 'Vendor has been Added Successfully');
          setTimeout(() => {
            this.isalert = false;
            this.router.navigateByUrl('dashboard/vendor');
          }, 3000);
        },
        (error) => {
          this.isalert = true;
          if (error.status == 401) {
            (this.alert.type = 'error'),
              (this.alert.upermessage = 'Unauthorized'),
              (this.alert.lowermessage = 'You donot have Permission');
          } else {
            (this.alert.type = 'error'),
              (this.alert.upermessage = 'Something went wrong'),
              (this.alert.lowermessage = 'Pleasr try again later');
          }
          setTimeout(() => {
            this.isalert = false;
          }, 3000);
        }
      );
    }
  }
  onselect($event: any) {
    throw new Error('Method not implemented.');
  }
  imageUrl: string = 'Image.svg';
  inputerrormessages = constant.inputerrormessage;
  vendorinfo = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl(''),
    officeAddress: new FormControl(''),
    phoneNumber: new FormControl(''),
  });
}
