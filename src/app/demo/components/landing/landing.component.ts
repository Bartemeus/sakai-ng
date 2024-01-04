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
    lots: any[] = [{
      title:'Asus ROG Strix',
      img:'https://api.technodom.kz/f3/api/v1/images/257922_2.jpg',
      price:600000,
      param1:'AMD Ryzen 7 AM4 5800X',
      param2:'NVIDIA GeForce RTX 3060 8 ГБ',
      param3:'Материнская плата ASUS B550',
      param4:'1 ТБ (SSD) DDR4 32 ГБ 4 x 8 ГБ'
    }];
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
