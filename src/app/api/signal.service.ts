import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: Socket;

  constructor() {
    this.socket = io('https://ner.kz/socket.io'); // Connect to your Socket.io server
  }

  sendMessage(message: string) {
    this.socket.emit('chat', message);
  }

  getMessage(): Observable<any> {
    return new Observable(observer => {
      this.socket.on('chat', (data: any) => {
        observer.next(data);
      });
    });
  }
}
