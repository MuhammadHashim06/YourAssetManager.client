import { Component, inject, OnInit } from '@angular/core';
import { AssetService } from '../../../../../core/services/asset/asset.service';
import { catchError, subscribeOn, throwError } from 'rxjs';
import { CategoryService } from '../../../../../core/services/category/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assetlist',
  templateUrl: './assetlist.component.html',
  styleUrl: './assetlist.component.scss'
})
export class AssetlistComponent implements OnInit {
stophide($event: MouseEvent) {
  $event.stopPropagation()
throw new Error('Method not implemented.');
}
hidefilter($event: MouseEvent) {
  this.isshowfilter=false
}
assetdetail(event :any) {

  this.router.navigateByUrl(`dashboard/asset/${event}`)


}
resetfilter($event: MouseEvent) {
  // $event.preventDefault()
  this.filter=[]
  this.filterasset()
}

setfilter(arg0: string , event:any) {
  event.stopPropagation()
  this.isshowfilter=true
  this.setfiltervalue=arg0
}
toogle($event:any) {
  
  const index = this.filter.indexOf($event)
  if(index>=0){
    this.filter.splice(index,1)

  }else{
    this.filter.push($event)
  }
  console.log(this.filter);
  this.filterasset()
}
filterasset(){
  if(this.filter.length>0){
  this.filteredasset=this.assetList.filter(asset => {
  
    // Check if any of the asset's properties match any filter value
    return this.filter.some(filter => 
      asset.assetStatusData === filter ||
      asset.assetCategoryData === filter ||
      asset.manufacturer === filter ||
      asset.model === filter ||
      asset.assetTypeData === filter ||
      asset.vendorData === filter
    );

  });
}else{
  this.filteredasset=this.assetList
}
  console.log(this.filteredasset);
  
}

  assetList: Array<any> = [];
  categories:Array<any>=[];
  filter:Array<any>=[]
  isshowfilter=false
  setfiltervalue:any ='Status'
  filteredasset:Array<any>=[]
  private router=inject(Router)

  status=['Assigned','Retired','UnderMaintenance','Returned','Available']
  constructor(private assetservice: AssetService,private categoryservice:CategoryService) { }
  ngOnInit(): void {
    this.assetservice.getallasset().pipe(
      catchError(error=>{
return throwError(error)
      })
    ).subscribe(res => {
      this.assetList = res.responseData.$values
      this.filteredasset=res.responseData.$values
    })

    this.categoryservice.getcategory().pipe().subscribe(
      res=>{
        this.categories=res.responseData.$values
      }
    )
  }


  
}
