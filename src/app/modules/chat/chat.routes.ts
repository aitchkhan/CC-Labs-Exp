import { Routes } from '@angular/router/router';
import { ChatMainComponent } from './routes/chat-main/chat-main.component';

export const chatRoutes : Routes = [
  {path: 'chat', children: [
    { path: '', pathMatch: 'full', component: ChatMainComponent}
    ]
  }
];