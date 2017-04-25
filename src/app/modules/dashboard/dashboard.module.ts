import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMainComponent } from './routes/dashboard-main/dashboard-main.component';

import { dashboardRoutes } from './dashboard.routes';
import { DashboardStatsComponent } from './routes/dashboard-stats/dashboard-stats.component';
import { DashboardClassifierComponent } from './routes/dashboard-classifier/dashboard-classifier.component';
import { DashboardComponent } from './dashboard.component';
import { ClassifierResultComponent } from './components/classifier-result/classifier-result.component';
import { ClassifierWindowComponent } from './components/classifier-window/classifier-window.component';
import { ClassifierPictureComponent } from './components/classifier-picture/classifier-picture.component';
import { ClassifierUploadButtonComponent } from './components/classifier-upload-button/classifier-upload-button.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  declarations: [DashboardMainComponent, DashboardStatsComponent, DashboardClassifierComponent, DashboardComponent, ClassifierResultComponent, ClassifierWindowComponent, ClassifierPictureComponent, ClassifierUploadButtonComponent]
})
export class DashboardModule { }
