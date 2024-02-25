import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styles: `.dropdown-content {
      display: none !important;
      position: absolute; /* Позиционирование относительно родительского элемента */
      background-color: #f9f9f9; /* Цвет фона */
      min-width: 160px; /* Минимальная ширина */
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); /* Тень для выпадающего меню */
      z-index: 1; /* Убедитесь, что выпадающее меню находится над другими элементами */
  }
  
  .dropdown-content.visible {
      display: block !important;
  }
  `,
})
export class LandingComponent {
    messageToSend: string;
    messages: string[] = [];
    lots: any[] = [
        {
            title: 'Asus ROG Strix',
            img: 'https://api.technodom.kz/f3/api/v1/images/257922_2.jpg',
            price: 600000,
            param1: 'AMD Ryzen 7 AM4 5800X',
            param2: 'NVIDIA GeForce RTX 3060 8 ГБ',
            param3: 'Материнская плата ASUS B550',
            param4: '1 ТБ (SSD) DDR4 32 ГБ 4 x 8 ГБ',
        },
        {
            title: 'Asus ROG Strix',
            img: 'https://api.technodom.kz/f3/api/v1/images/257922_2.jpg',
            price: 600000,
            param1: 'AMD Ryzen 7 AM4 5800X',
            param2: 'NVIDIA GeForce RTX 3060 8 ГБ',
            param3: 'Материнская плата ASUS B550',
            param4: '1 ТБ (SSD) DDR4 32 ГБ 4 x 8 ГБ',
        },
        {
            title: 'balaqai',
            img: 'https://frankfurt.apollo.olxcdn.com/v1/files/o9o45jpxdovx-KZ/image;s=900x900',
            price: 5690,
            param1: 'Детские подгузники',
            param2: 'Жапондық технологиямен',
            param3: 'Подгузники “BALAQAI”',
            param4: '5 690 ₸',
        },
    ];
    constructor(public layoutService: LayoutService, public router: Router) {
        // this.socket.on('message', (data: string) => {
        //   this.messages.push(data);
        // });
    }
    isDropdownVisible = false;

    toggleDropdown() {
        this.isDropdownVisible = !this.isDropdownVisible;
    }
    ngOnInit() {
        // this.socket.on('msg', (data: string) => {
        //     this.messages.push(data);
        // });
    }

    sendMessage(): void {
        // if (this.messageToSend.trim() !== '') {
        //   this.socket.emit('message', this.messageToSend);
        //   this.messageToSend = ''; // Очистить поле ввода после отправки
        // }
    }
}
