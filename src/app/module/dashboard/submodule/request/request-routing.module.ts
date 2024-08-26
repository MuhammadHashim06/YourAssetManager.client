import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YourrequestsComponent } from './yourrequests/yourrequests.component';
import { AssetrequestComponent } from './assetrequest/assetrequest.component';
import { CreaterequestsComponent } from './createrequests/createrequests.component';

const routes: Routes = [
  {
  path:'yourrequests',
  component: YourrequestsComponent
},{
  path:'assetrequests',
  component: AssetrequestComponent
},{
  path:'create',
  component: CreaterequestsComponent
},{
  path:'**',
  redirectTo: 'yourrequests',
  pathMatch:'full'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestRoutingModule { }
