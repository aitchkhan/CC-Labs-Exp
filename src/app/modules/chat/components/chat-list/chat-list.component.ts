import { Component, OnInit, Input } from '@angular/core';

import { Message } from "../../models/message";

@Component({
  selector: 'chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {
  @Input() messages: Message;
  constructor() { }

  ngOnInit() {
  }
  

}
