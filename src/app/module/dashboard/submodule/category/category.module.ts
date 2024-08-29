import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataloadingComponent } from "../../../../shared/reusablecomponents/dataloading/dataloading.component";
import { AlertComponent } from "../../../../shared/reusablecomponents/alert/alert.component";


@NgModule({
  declarations: [
    CategorylistComponent,
    AddcategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataloadingComponent,
    AlertComponent
]
})
export class CategoryModule { }
