import { NgModule } from '@angular/core';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'https://ner.kz', options: {} }; // Замените на ваш URL Socket.io сервера

@NgModule({
  imports: [
    SocketIoModule.forRoot(config)
  ],
  exports: [SocketIoModule]
})
export class SocketIOModule { }
