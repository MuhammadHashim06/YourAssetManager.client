import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypelistComponent } from './typelist/typelist.component';
import { AddtypeComponent } from './addtype/addtype.component';

const routes: Routes = [{
  path: '',
  component: TypelistComponent
},{
  path: 'add',
  component:AddtypeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeRoutingModule { }
