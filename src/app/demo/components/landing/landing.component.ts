import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html'
})
export class LandingComponent {
    messageToSend: string;
    messages: string[] = [];
    constructor(public layoutService: LayoutService, public router: Router, private socket: Socket) {
      this.socket.on('message', (data: string) => {
        this.messages.push(data);
      });
     }
    
  ngOnInit() {
    this.socket.on('msg', (data: string) => {
        this.messages.push(data);
    });
  }

  sendMessage(): void {
    if (this.messageToSend.trim() !== '') {
      this.socket.emit('message', this.messageToSend);
      this.messageToSend = ''; // Очистить поле ввода после отправки
    }
  }
}
