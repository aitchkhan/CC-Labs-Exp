import { Component, OnInit, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { Observable } from 'rxjs';
import { Message } from '../../models/message';

@Component({
  selector: 'chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css'],
  animations: [
    trigger('slidePanel', [
     state('collapsed', style({
        bottom: -200
     })),
     state('expanded', style({
       bottom: 0
     })),
     transition('expanded => collapsed', animate('0.5s forwards', keyframes([
       style({ bottom: -200 }),
     ])))

    ])
  ]
})
export class ChatWindowComponent implements OnInit {
  messagesList: Array<Message> = [];
  newMessage: Message = new Message();
  slideState = 'expanded';
  constructor(public el: ElementRef) {
   }

  ngOnInit() {
    let i = 0;
    for (i = 0; i < 2; i++) {
      if (i % 2 == 0) {
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
    this.messagesList.push(m);
    setTimeout( () => {
      this.scrollToBottom();
    });
  }

  scrollToBottom(): void {
    const scrollPane: any = this.el
      .nativeElement.querySelector('.msg-container-base');
    scrollPane.scrollTop = scrollPane.scrollHeight;
  }

  toggleWindow(): void {

    this.slideState = (this.slideState == 'expanded') ? 'collapsed' : 'expanded';
    console.log(this.slideState);
  }

//   $(document).on('click', '.panel-heading span.icon_minim', function (e) {
//     var $this = $(this);
//     if (!$this.hasClass('panel-collapsed')) {
//         $this.parents('.panel').find('.panel-body').slideUp();
//         $this.addClass('panel-collapsed');
//         $this.removeClass('glyphicon-minus').addClass('glyphicon-plus');
//     } else {
//         $this.parents('.panel').find('.panel-body').slideDown();
//         $this.removeClass('panel-collapsed');
//         $this.removeClass('glyphicon-plus').addClass('glyphicon-minus');
//     }
// });
// $(document).on('focus', '.panel-footer input.chat_input', function (e) {
//     var $this = $(this);
//     if ($('#minim_chat_window').hasClass('panel-collapsed')) {
//         $this.parents('.panel').find('.panel-body').slideDown();
//         $('#minim_chat_window').removeClass('panel-collapsed');
//         $('#minim_chat_window').removeClass('glyphicon-plus').addClass('glyphicon-minus');
//     }
// });
// $(document).on('click', '#new_chat', function (e) {
//     var size = $( ".chat-window:last-child" ).css("margin-left");
//      size_total = parseInt(size) + 400;
//     alert(size_total);
//     var clone = $( "#chat_window_1" ).clone().appendTo( ".container" );
//     clone.css("margin-left", size_total);
// });
// $(document).on('click', '.icon_close', function (e) {
//     //$(this).parent().parent().parent().parent().remove();
//     $( "#chat_window_1" ).remove();
// });

}
