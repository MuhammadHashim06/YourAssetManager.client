import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';

const routes: Routes = [{
  path:'',
component:CategorylistComponent
},{
  path:'add',
  component:AddcategoryComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
