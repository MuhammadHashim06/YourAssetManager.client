import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssetService } from '../../../../../core/services/asset/asset.service';

@Component({
  selector: 'app-assetdetail',
  templateUrl: './assetdetail.component.html',
  styleUrl: './assetdetail.component.scss',
})
export class AssetdetailComponent implements OnInit {
updateasset(arg0: any) {
  this.router.navigateByUrl(`dashboard/asset/create/${arg0}`)
}
  isLoading = true;
  router=inject(Router)
deleteasset(arg0: any) {
  this.assetservice.deleteasset(arg0).pipe().subscribe(res=>{
    console.log(res);
    this.router.navigateByUrl('dashboard/asset')
  })
  
}
  id: any;
  assetdetail: any;
  constructor(
    private activedroute: ActivatedRoute,
    private assetservice: AssetService
  ) {
    this.id = this.activedroute.snapshot.params['id'];
    console.log(this.id);
  }
  ngOnInit(): void {
    this.assetservice
      .getassetbyid(this.id)
      .pipe()
      .subscribe((res) => {
        this.isLoading=false
        this.assetdetail = res.responseData;
        console.log(this.assetdetail);
      });
  }
}
