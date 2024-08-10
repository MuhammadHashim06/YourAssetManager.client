import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';


@NgModule({
  declarations: [
    CategoryComponent,
    CategorylistComponent,
    AddcategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
