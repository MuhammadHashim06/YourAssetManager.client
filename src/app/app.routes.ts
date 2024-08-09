import { Routes } from '@angular/router';
import { MessageComponent } from './shared/reusablecomponents/message/message.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'auth',
        pathMatch:'full',
    },
    {
        path:'auth',
        loadChildren:()=>import('./module/auth/auth.module').then(m => m.AuthModule)
    },{
        path:'dashboard',
        loadChildren:()=>import('./module/dashboard/dashboard.module').then(m=>m.DashboardModule),
    },
    {
        path:'**',
        component:MessageComponent
    }
];
