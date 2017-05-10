import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Message } from '../../models/message';
@Component({
  selector: 'chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent implements OnInit {
  chatMsgForm : FormGroup;
  @Input() message: Message;
  @Output() onNewMessage: EventEmitter<Message> = new EventEmitter();

  constructor() {
    this.chatMsgForm = new FormGroup({
      message: new FormControl('', [
        Validators.required
      ])
    });
   }

   botMessages : Array<Message>= [
     new Message({sender: 1, text: 'Oh, I dont know the answer'}),
     new Message({sender: 1, text: 'yes, you are right'}),
     new Message({sender: 1, text: 'Whats wrong with you?'}),
     new Message({sender: 1, text: 'Oh, I dont know them'}),
     new Message({sender: 1, text: 'hello, I am a dumb bot!! :)'})
  ];

  submitForm = function ()  {
    console.log(this.botMessages[Math.floor(Math.random() * 5) + 1 ]);

    this.onNewMessage.emit(new Message({text: this.chatMsgForm.value.message, sender: 0}));
    this.onNewMessage.emit(new Message(this.botMessages[Math.floor(Math.random() * 4) + 1 ]));

    this.chatMsgForm.reset();
  };
  ngOnInit() {
  }

}
