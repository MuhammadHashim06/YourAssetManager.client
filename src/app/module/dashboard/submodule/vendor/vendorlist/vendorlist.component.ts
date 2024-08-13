import { Component, OnInit } from '@angular/core';
import { VendorService } from '../../../../../core/services/vendor/vendor.service';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendorlist',
  templateUrl: './vendorlist.component.html',
  styleUrl: './vendorlist.component.scss'
})
export class VendorlistComponent implements OnInit {
  dataload=false
delete(arg0: any) {
  this.service.deletevender(arg0).pipe(
    catchError(error => {
      return throwError(error)
    })
  ).subscribe(res => {
    console.log(res);
    console.log(this.vendors)
  })
  this.getvendor()

}
edit(arg0: any) {
  this.router.navigateByUrl(`dashboard/vendor/add?id=${arg0}`)

}
  constructor(private service: VendorService,private router :Router) { }
  getvendor(){
    this.dataload=false
    this.service.getvendors().pipe(
      catchError(error => {
        return throwError(error)
      })
    ).subscribe(res => {
      this.vendors = res.responseData.venders.$values
      this.dataload=true
      console.log(res);
      
      console.log(this.vendors)
    })

  }
  vendors: any
  ngOnInit(): void {
    this.getvendor()
   
  }

}
