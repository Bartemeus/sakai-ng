import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { CountryService } from '../../service/country.service';

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
    noBuilderPageForUrl: boolean = false;
    lots: any[] = [];
    constructor(public layoutService: LayoutService, public router: Router,private countryService: CountryService) {
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
        this.countryService.getAll().then(countries => {
            this.lots = countries;
        });
    }

    sendMessage(): void {
        // if (this.messageToSend.trim() !== '') {
        //   this.socket.emit('message', this.messageToSend);
        //   this.messageToSend = ''; // Очистить поле ввода после отправки
        // }
    }
}
