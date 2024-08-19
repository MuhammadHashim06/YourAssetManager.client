import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrganizationComponent } from './organization/organization.component';
import { BoardComponent } from './board/board.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [{
    path: '',
    component: DashboardComponent,
    children: [{
        path:'',
        redirectTo:'home',
        pathMatch: 'full'
    },
      {
        path: 'asset',
        loadChildren: () => import('./submodule/asset/asset.module').then(m => m.AssetModule)
      }, {
        path: 'user',
        loadChildren: () => import('./submodule/user/user.module').then(m => m.UserModule)
      },
      {
        path:'category',
        loadChildren:()=>import('./submodule/category/category.module').then(m=>m.CategoryModule)
      },{
        path:'vendor',
        loadChildren:()=>import('./submodule/vendor/vendor.module').then(m=>m.VendorModule)
      },{
        path:'type',
        loadChildren:()=>import('./submodule/type/type.module').then(m=>m.TypeModule)
      },{
        path:'home',
        component:BoardComponent
      },{
        path:'profile',
        component:ProfileComponent
      }
    ]
  }, {
    path: 'organization',
    component: OrganizationComponent
  }, {
    path: '**',
    redirectTo: '',
  }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
