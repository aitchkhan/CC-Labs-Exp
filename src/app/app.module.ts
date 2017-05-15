import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import 'hammerjs';

/*
App Modules
*/
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ChatModule } from './modules/chat/chat.module';

import { PageNotFoundComponent } from './routes/page-not-found/page-not-found.component';

/**
 * Services
 */

import { HttpService } from './services/http.service';
//root component
import { AppComponent } from './app.component';
/**
 * application routes
 */

import { appRoutes } from './routes/app.routes';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true}),
    BrowserModule,
    SharedModule,
    DashboardModule,
    ChatModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
