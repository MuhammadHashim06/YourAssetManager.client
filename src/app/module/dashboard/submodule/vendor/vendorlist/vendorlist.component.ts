import { Component, OnInit } from '@angular/core';
import { VendorService } from '../../../../../core/services/vendor/vendor.service';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Alert } from '../../../../../shared/reusablecomponents/alert/alert.component';

@Component({
  selector: 'app-vendorlist',
  templateUrl: './vendorlist.component.html',
  styleUrl: './vendorlist.component.scss'
})
export class VendorlistComponent implements OnInit {
  dataload = false
  isalert=false
alert: Alert = {
  type: '',
  upermessage:'',
  lowermessage:''
};
  delete(arg0: any) {
    this.service.deletevender(arg0).subscribe(res => {
      this.alert.type='success'
        this.alert.upermessage = 'Deleted Success',
        this.alert.lowermessage = 'Vendor Deleted Successfully'
      
   setTimeout(() => {
    this.isalert=false
   }, 3000);
      this.getvendor()
    }, error=>{
       this.isalert=true
    this.alert.type='error'
      if(error.status==405){
        this.alert.type='warning'
        this.alert.upermessage = 'Delete Failed',
        this.alert.lowermessage = 'Vendor is already in use'
      }else{
        this.alert.type='error'
        this.alert.upermessage = 'Something went wrong',
        this.alert.lowermessage = 'Please try again Later'
      }
   setTimeout(() => {
    this.isalert=false
   }, 3000);
    
    } )


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
