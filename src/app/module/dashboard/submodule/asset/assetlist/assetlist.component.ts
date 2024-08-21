import { Component, OnInit } from '@angular/core';
import { AssetService } from '../../../../../core/services/asset/asset.service';
import { catchError, subscribeOn, throwError } from 'rxjs';
import { CategoryService } from '../../../../../core/services/category/category.service';

@Component({
  selector: 'app-assetlist',
  templateUrl: './assetlist.component.html',
  styleUrl: './assetlist.component.scss'
})
export class AssetlistComponent implements OnInit {
resetfilter($event: MouseEvent) {
  this.filter=[]
  this.filterasset()
}

setfilter(arg0: string) {
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
  isshowfilter=true
  setfiltervalue:any 
  filteredasset:Array<any>=[]

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
