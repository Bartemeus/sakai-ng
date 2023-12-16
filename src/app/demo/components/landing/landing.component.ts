import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html'
})
export class LandingComponent {
    messageToSend: string;
    messages: string[] = [];
    constructor(public layoutService: LayoutService, public router: Router) { }
    
  ngOnInit() {
    this.socketService.getMessage().subscribe((data) => {
      // Handle received messages from the server
      console.log('Received message:', data);
      this.messages.push(data);
      // Do something with the received data
    });
  }

  sendMessage() {
    this.socketService.sendMessage(this.messageToSend);
    this.messageToSend = ''; // Clear the input field after sending
  }
}
