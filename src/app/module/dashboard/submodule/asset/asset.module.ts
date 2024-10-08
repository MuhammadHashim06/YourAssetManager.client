import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetRoutingModule } from './asset-routing.module';
import { AssetlistComponent } from './assetlist/assetlist.component';
import { AssetcreateComponent } from './assetcreate/assetcreate.component';
import { AssetdetailComponent } from './assetdetail/assetdetail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToggleStyleDirective } from '../../../../shared/directives/toggle-style.directive';
import { AlertComponent } from "../../../../shared/reusablecomponents/alert/alert.component";
import { DataloadingComponent } from "../../../../shared/reusablecomponents/dataloading/dataloading.component";


@NgModule({
  declarations: [
    AssetlistComponent,
    AssetcreateComponent,
    AssetdetailComponent,
    ToggleStyleDirective

  ],
  imports: [
    CommonModule,
    AssetRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AlertComponent,
    DataloadingComponent
]
})
export class AssetModule { }
