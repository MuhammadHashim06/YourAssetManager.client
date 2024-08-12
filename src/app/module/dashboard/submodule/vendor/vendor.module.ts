import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { VendorlistComponent } from './vendorlist/vendorlist.component';
import { AddvendorComponent } from './addvendor/addvendor.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VendorlistComponent,
    AddvendorComponent
  ],
  imports: [
    CommonModule,
    VendorRoutingModule,
    ReactiveFormsModule
  ]
})
export class VendorModule { }
