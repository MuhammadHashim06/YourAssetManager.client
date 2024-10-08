import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetlistComponent } from './assetlist/assetlist.component';
import { AssetcreateComponent } from './assetcreate/assetcreate.component';
import { AssetdetailComponent } from './assetdetail/assetdetail.component';

const routes: Routes = [
  { path: '', component: AssetlistComponent },
  { path: 'create', component: AssetcreateComponent },
  { path: ':id', component: AssetdetailComponent },
  { path: 'create/:id', component: AssetcreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetRoutingModule { }
