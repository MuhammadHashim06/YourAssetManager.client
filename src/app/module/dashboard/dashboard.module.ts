import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BoardComponent } from './board/board.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterOutlet } from '@angular/router';
import { OrganizationComponent } from './organization/organization.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SidebarComponent,
    BoardComponent,
    DashboardComponent,
    OrganizationComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterOutlet,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
