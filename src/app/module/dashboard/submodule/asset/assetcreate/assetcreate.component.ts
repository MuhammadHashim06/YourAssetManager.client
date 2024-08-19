import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../../../core/services/category/category.service';
import { VendorService } from '../../../../../core/services/vendor/vendor.service';
import { AssetService } from '../../../../../core/services/asset/asset.service';
import { catchError, throwError } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-assetcreate',
  templateUrl: './assetcreate.component.html',
  styleUrl: './assetcreate.component.scss'
})
export class AssetcreateComponent implements OnInit {

   AssetDTO = new FormGroup({
    AssetName: new FormControl('',Validators.required),
    Description: new FormControl(''),
    PurchaseDate: new FormControl(''),
    PurchasePrice: new FormControl(''),
    SerialNumber: new FormControl(''),
    AssetIdentificationNumber: new FormControl(''),
    Manufacturer: new FormControl(''),
    Model: new FormControl(''),
    CatagoryReleventFeildsData: new FormControl(''),
    AssetStatusId: new FormControl(''),
    OrganizationId: new FormControl(''),
    AssetCategoryId: new FormControl(''),
    AssetTypeId: new FormControl(''),
    VendorId: new FormControl(''),
   })
 

setvendor($event: any) {
  const index=$event.target.value
  if(index>0){
    this.AssetDTO.controls['AssetCategoryId'].setValue($event.target.value)
  }else
  {
    this.AssetDTO.controls['AssetCategoryId'].setValue('')

  }
  
}
  Saveasset($event: MouseEvent) {
    $event.preventDefault()
  }
  showcolumn($event: any) {
    const index = $event.target.value
    console.log(index);

    if (index > 0) {
      console.log(this.categories)
      this.AssetDTO.controls['AssetCategoryId'].setValue(index)
      let category
      category=this.categories.find(c=>c.id=index)
      this.CatagoryReleventFeildsData = JSON.parse(category.relaventInputFields)
      console.log(this.CatagoryReleventFeildsData);
    } else {
      this.CatagoryReleventFeildsData = []
      this.AssetDTO.controls['AssetCategoryId'].setValue('')
    }
  }
  CatagoryReleventFeildsData: any
  categories: Array<any> = [];
  vendors: Array<any> = [];
  constructor(private categoryservice: CategoryService, private vendorservice: VendorService, private assetservice: AssetService) { }
  ngOnInit(): void {
    this.categoryservice.getcategory().pipe(
      catchError(error => {
        return throwError(error)
      })
    ).subscribe(res => {
      console.log(res);

      if (res.status == 404) {
        this.categories.push({ id: 0, categoryName: 'No Category Found' })
      } else {
        this.categories = res.responseData.$values;
        console.log(this.categories);
      }
    })

    this.vendorservice.getvendors().pipe(
      catchError(error => {
        return throwError(error)
      })
    ).subscribe(res => {
      console.log(res);

      if (res.status == 404) {
        this.vendors.push({ id: 0, name: 'No Vendor Found' })
      } else {
        this.vendors = res.responseData.$values;
        console.log(this.vendors);
      }
    })
  }
  addAsset() {
  }

}
