import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


export const appRoutes : Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: '**', component: PageNotFoundComponent },
];