import { Component, inject, OnInit } from '@angular/core';
import { CategoryService } from '../../../../../core/services/category/category.service';
import { VendorService } from '../../../../../core/services/vendor/vendor.service';
import { AssetService } from '../../../../../core/services/asset/asset.service';
import { catchError, throwError } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AssettypeService } from '../../../../../core/services/assettype/assettype.service';
import { ActivatedRoute, Router } from '@angular/router';
import { constant } from '../../../../../core/constant/constant';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-assetcreate',
  templateUrl: './assetcreate.component.html',
  styleUrl: './assetcreate.component.scss',
})
export class AssetcreateComponent implements OnInit {
  inputerrormessage = constant.inputerrormessage;
  setAssettype($event: any) {
    let index = $event.target.value;
    if (index > 0) {
      this.AssetDTO.controls['assetTypeData'].setValue(index);
    } else {
      this.AssetDTO.controls['assetTypeData'].setValue('');
    }
  }

  AssetDTO = new FormGroup({
    assetName: new FormControl('', Validators.required),
    description: new FormControl(''),
    purchaseDate: new FormControl('', Validators.required),
    purchasePrice: new FormControl('', Validators.required),
    serialNumber: new FormControl('', Validators.required),
    assetIdentificationNumber: new FormControl(''),
    manufacturer: new FormControl(''),
    model: new FormControl(''),
    catagoryReleventFeildsData: new FormControl(''),
    organizationData: new FormControl('0'),
    assetStatusData: new FormControl('0'),
    assetCategoryData: new FormControl('', Validators.required),
    assetTypeData: new FormControl('', Validators.required),
    vendorData: new FormControl('', Validators.required),
  });

  setvendor($event: any) {
    const index = $event.target.value;
    if (index > 0) {
      this.AssetDTO.controls['vendorData'].setValue($event.target.value);
    } else {
      this.AssetDTO.controls['vendorData'].setValue('');
    }
  }
  route = inject(Router);
  Saveasset($event: MouseEvent) {
    $event.preventDefault();
    // console.log(this.AssetDTO.value);
    this.AssetDTO.controls['catagoryReleventFeildsData'].setValue(
      JSON.stringify(this.AssetDTO.controls['catagoryReleventFeildsData'].value)
    );

    if (this.AssetDTO.valid) {
      console.log(this.AssetDTO.value);
      this.assetservice
        .addasset(this.AssetDTO.value)
        .pipe(
          catchError((error) => {
            console.error(error);
            return throwError(error);
          })
        )
        .subscribe((res) => {
          // console.log(res);

          this.route.navigateByUrl('dashboard/asset');
        });
    } else {
      this.AssetDTO.markAllAsTouched();
    }
  }
  showcolumn($event: any) {
    const index = $event.target.value;
    // console.log(index);

    if (index > 0) {
      // console.log("Categories",this.categories)
      this.AssetDTO.controls['assetCategoryData'].setValue(index);
      let category;
      category = this.categories.find((c) => c.id == index);
      this.catagoryReleventFeildsData = JSON.parse(
        category.relaventInputFields
      );
      this.AssetDTO.controls['catagoryReleventFeildsData'].setValue(
        this.catagoryReleventFeildsData
      );
      // console.log("Relevent Field",this.catagoryReleventFeildsData);
    } else {
      this.catagoryReleventFeildsData = [];
      this.AssetDTO.controls['assetCategoryData'].setValue('');
    }
  }
  id = 0
  catagoryReleventFeildsData: any;
  categories: Array<any> = [];
  vendors: Array<any> = [];
  assettype: Array<any> = [];
  constructor(
    private categoryservice: CategoryService,
    private vendorservice: VendorService,
    private assetservice: AssetService,
    private assettypeservice: AssettypeService,
    private activeroute: ActivatedRoute
  ) {

    this.id = this.activeroute.snapshot.params['id']

  }
  ngOnInit(): void {


    if (this.id != undefined && this.id > 0) {
      const datePipe = new DatePipe('en-US');
      this.assetservice.getassetbyid(this.id).subscribe((res: any) => {
        const updateasset = res.responseData
        this.AssetDTO.setValue({
          assetName: updateasset.assetName,
          description: updateasset.description,
          purchaseDate:datePipe.transform(updateasset.purchaseDate, 'yyyy-MM-dd'),
          purchasePrice: updateasset.purchasePrice,
          serialNumber: updateasset.serialNumber,
          assetIdentificationNumber: updateasset.assetIdentificationNumber,
          manufacturer: updateasset.manufacturer,
          model: updateasset.model,
          catagoryReleventFeildsData: updateasset.catagoryReleventFeildsData,
          organizationData: updateasset.organizationData,
          assetStatusData: updateasset.assetStatusData,
          assetCategoryData: updateasset.assetCategoryData,
          assetTypeData: updateasset.assetTypeData,
          vendorData: updateasset.vendorData,
        });
        this.catagoryReleventFeildsData= JSON.parse(updateasset.catagoryReleventFeildsData)
        console.log(this.AssetDTO.value);

      })
    }

    this.categoryservice
      .getcategory()
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      )
      .subscribe((res) => {
        // console.log(res);

        if (res.status == 404) {
          this.categories.push({ id: 0, categoryName: 'No Category Found' });
        } else {
          this.categories = res.responseData.$values;
          // console.log(this.categories);
        }
      });

    this.vendorservice
      .getvendors()
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      )
      .subscribe((res) => {
        // console.log(res);

        if (res.status == 404) {
          this.vendors.push({ id: 0, name: 'No Vendor Found' });
        } else {
          this.vendors = res.responseData.$values;
          // console.log(this.vendors);
        }
      });
    this.assettypeservice
      .getallassettype()
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      )
      .subscribe((res) => {
        // console.log(res);

        if (res.status == 404) {
          this.assettype.push({ id: 0, name: 'No Asset Type Found' });
        } else {
          this.assettype = res.responseData.$values;
          // console.log(this.assettype);
        }
      });
  }
  addAsset() { }
}
