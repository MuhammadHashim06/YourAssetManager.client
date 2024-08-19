import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeRoutingModule } from './type-routing.module';
import { TypelistComponent } from './typelist/typelist.component';
import { AddtypeComponent } from './addtype/addtype.component';
import { DataloadingComponent } from "../../../../shared/reusablecomponents/dataloading/dataloading.component";


@NgModule({
  declarations: [
    TypelistComponent,
    AddtypeComponent
  ],
  imports: [
    CommonModule,
    TypeRoutingModule,
    DataloadingComponent
]
})
export class TypeModule { }
