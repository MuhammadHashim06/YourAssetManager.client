import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar/sidebar.component';
import { BoardComponent } from './board/board.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterOutlet } from '@angular/router';
import { OrganizationComponent } from './organization/organization.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { UpdateorganizationComponent } from './updateorganization/updateorganization.component';


@NgModule({
  declarations: [
    SidebarComponent,
    BoardComponent,
    DashboardComponent,
    OrganizationComponent,
    ProfileComponent,
    UpdateorganizationComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    RouterOutlet,
    ReactiveFormsModule,
    NgxChartsModule,
  ]
})
export class DashboardModule { }
