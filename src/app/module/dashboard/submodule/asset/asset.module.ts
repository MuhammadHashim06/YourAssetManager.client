import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetRoutingModule } from './asset-routing.module';
import { AssetlistComponent } from './assetlist/assetlist.component';
import { AssetcreateComponent } from './assetcreate/assetcreate.component';
import { AssetdetailComponent } from './assetdetail/assetdetail.component';
import { AsseteditComponent } from './assetedit/assetedit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToggleStyleDirective } from '../../../../shared/directives/toggle-style.directive';


@NgModule({
  declarations: [
    AssetlistComponent,
    AssetcreateComponent,
    AssetdetailComponent,
    AsseteditComponent,
    ToggleStyleDirective

  ],
  imports: [
    CommonModule,
    AssetRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AssetModule { }
