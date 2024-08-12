import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { constant } from '../../../../../core/constant/constant';
import { VendorService } from '../../../../../core/services/vendor/vendor.service';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addvendor',
  templateUrl: './addvendor.component.html',
  styleUrl: './addvendor.component.scss'
})
export class AddvendorComponent {
  constructor(private service: VendorService,private router:Router) { }
  Addvendor($event: MouseEvent) {
    if (this.vendorinfo.invalid) {
      this.vendorinfo.markAllAsTouched();
    } else {
      this.service.addvendor(this.vendorinfo.value).pipe(
        catchError(error => {
          return throwError(error)
        })
      ).subscribe(res => {
        console.log(res)
        this.router.navigateByUrl('dashboard/vendor')
      })
    }

  }
  onselect($event: any) {
    throw new Error('Method not implemented.');
  }
  imageUrl: string = 'Image.svg'
  inputerrormessages = constant.inputerrormessage
  vendorinfo = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('',),
    officeAddress: new FormControl('',),
    phoneNumber: new FormControl('',),
  })


}
