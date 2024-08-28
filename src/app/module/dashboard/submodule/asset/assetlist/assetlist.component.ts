import { Component, OnInit } from '@angular/core';
import { AssetService } from '../../../../../core/services/asset/asset.service';
import { CategoryService } from '../../../../../core/services/category/category.service';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-assetlist',
  templateUrl: './assetlist.component.html',
  styleUrls: ['./assetlist.component.scss']
})
export class AssetlistComponent implements OnInit {
  assetList: Array<any> = [];
  filteredAsset: Array<any> = [];
  categories: Array<any> = [];
  filter: Array<any> = [];
  isShowFilter = false;
  setFilterValue: string = 'Status';
  status: Array<string> = ['Assigned', 'Retired', 'UnderMaintenance', 'Returned', 'Available'];
  targetCategory: any;
  targetStatus: any;

  constructor(
    private assetService: AssetService,
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadAssets();
    this.loadCategories();
  }
  private loadAssets(): void {
    this.assetService.getallasset().pipe(
      catchError(error => throwError(error))
    ).subscribe(res => {
      this.assetList = res.responseData.$values;
      this.filteredAsset = this.assetList;
    });
  }

  private loadCategories(): void {
    this.categoryService.getcategory().subscribe(res => {
      this.categories = res.responseData.$values;
    });
  }

  selectStatus(event: any): void {
    this.targetStatus = event.target.value;
    // this.filterAssets();
  }

  selectCategory(event: any): void {
    this.targetCategory = event.target.value;
    // this.filterAssets();
  }

  filterAsset(event: MouseEvent): void {
    if (this.targetCategory !== '-1') {
      this.filteredAsset = this.assetList.filter(x => x.assetCategoryData === this.targetCategory);
    }
    else {
      this.filteredAsset = this.assetList;
    }
    if (this.targetStatus !== '-1') {
      this.filteredAsset = this.filteredAsset.filter(x => x.assetStatusData === this.targetStatus);
    }
    else {
      this.filteredAsset = this.filteredAsset;
    }
  }
  stopHide(event: MouseEvent): void {
    event.stopPropagation();
  }

  hideFilter(event: MouseEvent): void {
    this.isShowFilter = false;
  }

  assetDetail(event: any): void {
    this.router.navigateByUrl(`dashboard/asset/${event}`);
  }

  resetFilter(event: MouseEvent): void {
    this.filteredAsset = this.assetList;
  }

  setFilter(arg0: string, event: any): void {
    event.stopPropagation();
    this.isShowFilter = true;
    this.setFilterValue = arg0;
  }

  toggle(event: any): void {
    const index = this.filter.indexOf(event);
    if (index >= 0) {
      this.filter.splice(index, 1);
    } else {
      this.filter.push(event);
    }
    this.filterAssets();
  }

  private filterAssets(): void {
    this.filter = [];
    if (this.targetCategory !== '=1') {
      this.filter.push(this.targetCategory);

    }
    if (this.targetStatus !== '-1') {
      this.filter.push(this.targetStatus);
    }

    if (this.filter.length > 0) {
      this.filteredAsset = this.assetList.filter(asset =>
        this.filter.some(filter =>
          asset.assetStatusData === filter ||
          asset.assetCategoryData === filter ||
          asset.manufacturer === filter ||
          asset.model === filter ||
          asset.assetTypeData === filter ||
          asset.vendorData === filter
        )
      );
    } else {
      this.filteredAsset = this.assetList;
    }
  }
}
