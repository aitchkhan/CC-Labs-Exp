import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatMainComponent } from './routes/chat-main/chat-main.component';
import { chatRoutes } from "./chat.routes";

@NgModule({
  imports: [
    RouterModule.forChild(chatRoutes),
    CommonModule,
    SharedModule
  ],
  declarations: [ChatMainComponent, ChatWindowComponent, ChatListComponent]
})
export class ChatModule { }
