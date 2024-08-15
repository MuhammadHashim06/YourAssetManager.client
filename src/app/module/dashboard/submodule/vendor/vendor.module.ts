import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { VendorlistComponent } from './vendorlist/vendorlist.component';
import { AddvendorComponent } from './addvendor/addvendor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataloadinComponent } from "../../../../shared/reusablecomponents/dataloadin/dataloadin.component";
import { DataloadingComponent } from "../../../../shared/reusablecomponents/dataloading/dataloading.component";
import { ResponseloadingComponent } from "../../../../shared/reusablecomponents/responseloading/responseloading.component";


@NgModule({
  declarations: [
    VendorlistComponent,
    AddvendorComponent
  ],
  imports: [
    CommonModule,
    VendorRoutingModule,
    ReactiveFormsModule,
    DataloadingComponent,
    ResponseloadingComponent
]
})
export class VendorModule { }
