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
  dataload = false
  delete(arg0: any) {
    this.service.deletevender(arg0).pipe(
      catchError(error => {
        return throwError(error)
      })
    ).subscribe(res => {
      this.getvendor()
    })


  }
  edit(arg0: any) {
    this.router.navigateByUrl(`dashboard/vendor/add?id=${arg0}`)

  }
  constructor(private service: VendorService, private router: Router) { }
  getvendor() {
    this.dataload = false
    this.service.getvendors().pipe(
      catchError(error => {
        this.dataload = true
        this.vendors = []
        return throwError(error)
      })
    ).subscribe(res => {
      if(res.status==404){
        this.dataload = true
        this.vendors = []
      }else{
        console.log(res);
        this.dataload = true
        this.vendors = res.responseData.$values
      }
    })

  }
  vendors: Array<any> = []
  ngOnInit(): void {
    this.getvendor()
  }

}
