import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestRoutingModule } from './request-routing.module';
import { AssetrequestComponent } from './assetrequest/assetrequest.component';
import { YourrequestsComponent } from './yourrequests/yourrequests.component';
import { CreaterequestsComponent } from './createrequests/createrequests.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from "../../../../shared/reusablecomponents/alert/alert.component";
import { DataloadingComponent } from "../../../../shared/reusablecomponents/dataloading/dataloading.component";


@NgModule({
  declarations: [
    AssetrequestComponent,
    YourrequestsComponent,
    CreaterequestsComponent
  ],
  imports: [
    CommonModule,
    RequestRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AlertComponent,
    DataloadingComponent
]
})
export class RequestModule { }
