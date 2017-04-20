import { Component, OnInit } from '@angular/core';

import { Message } from "../../models/message";

@Component({
  selector: 'chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {
  messagesList: Array<Message> = [];
  newMessage: Message = new Message();
  constructor() {
   }

  ngOnInit() {
    var i: number = 0;
    for(i = 0; i < 3; i++) {
      if(i % 2 == 0) {
        this.messagesList.push(new Message({
          text: 'Hey from the user',
          sender: 0
        }));
      }
      else {
        this.messagesList.push(new Message({
          text: 'Hello from the bot',
          sender: 1
        }));
      }
    } 
  }


  onEnter(m: Message) {
    console.log(m)
    this.messagesList.push(m);
  }

}
