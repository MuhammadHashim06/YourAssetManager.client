import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetlistComponent } from './assetlist/assetlist.component';
import { AssetcreateComponent } from './assetcreate/assetcreate.component';
import { AssetdetailComponent } from './assetdetail/assetdetail.component';
import { AsseteditComponent } from './assetedit/assetedit.component';

const routes: Routes = [
  { path: '', component: AssetlistComponent },
  { path: 'create', component: AssetcreateComponent },
  { path: ':id', component: AssetdetailComponent },
  { path: ':id/edit', component: AsseteditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetRoutingModule { }
