import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrganizationComponent } from './organization/organization.component';
import { BoardComponent } from './board/board.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  children: [{
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
    {
      path: 'asset',
      loadChildren: () => import('./submodule/asset/asset.module').then(m => m.AssetModule)
    }, {
      path: 'user',
      loadChildren: () => import('./submodule/user/user.module').then(m => m.UserModule)
    },{
      path: 'home',
      component:BoardComponent
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
