import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMainComponent } from './routes/dashboard-main/dashboard-main.component';

import { dashboardRoutes } from './dashboard.routes';
import { DashboardStatsComponent } from './routes/dashboard-stats/dashboard-stats.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  declarations: [DashboardMainComponent, DashboardStatsComponent]
})
export class DashboardModule { }
