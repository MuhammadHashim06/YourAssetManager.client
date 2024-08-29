import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeRoutingModule } from './type-routing.module';
import { TypelistComponent } from './typelist/typelist.component';
import { AddtypeComponent } from './addtype/addtype.component';
import { DataloadingComponent } from "../../../../shared/reusablecomponents/dataloading/dataloading.component";
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from "../../../../shared/reusablecomponents/alert/alert.component";


@NgModule({
  declarations: [
    TypelistComponent,
    AddtypeComponent
  ],
  imports: [
    CommonModule,
    TypeRoutingModule,
    DataloadingComponent,
    ReactiveFormsModule,
    AlertComponent
]
})
export class TypeModule { }
