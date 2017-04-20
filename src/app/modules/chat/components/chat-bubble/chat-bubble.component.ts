import { Component, OnInit, Input } from '@angular/core';

import { Message } from "../../models/message";

@Component({
  selector: 'chat-bubble',
  templateUrl: './chat-bubble.component.html',
  styleUrls: ['./chat-bubble.component.css']
})
export class ChatBubbleComponent implements OnInit {
  @Input() msg: Message;
  constructor() { }

  ngOnInit() {
  }

}
