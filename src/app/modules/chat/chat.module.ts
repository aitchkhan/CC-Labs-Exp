import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { ChatMainComponent } from './routes/chat-main/chat-main.component';
import { chatRoutes } from './chat.routes';
import { ChatInputComponent } from './components/chat-input/chat-input.component';
import { ChatBubbleComponent } from './components/chat-bubble/chat-bubble.component';

@NgModule({
  imports: [
    RouterModule.forChild(chatRoutes),
    SharedModule
  ],
  declarations: [ChatMainComponent, ChatWindowComponent, ChatListComponent, ChatInputComponent, ChatBubbleComponent]
})
export class ChatModule { }
