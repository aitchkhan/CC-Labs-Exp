import { Routes } from '@angular/router/router';

import { DashboardMainComponent } from './routes/dashboard-main/dashboard-main.component';
import { DashboardStatsComponent } from './routes/dashboard-stats/dashboard-stats.component';

export const dashboardRoutes: Routes = [
  { 
    path: 'dashboard', children: [
      { path: '', pathMatch: 'full', component: DashboardMainComponent },
      { path: 'stats', component: DashboardStatsComponent }
    ]
  }
  
]