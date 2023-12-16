import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/guard/auth.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {
login() : void {
    this.authService.login(this.username, this.password)
      .subscribe(response => {
        console.log(response)
      //   this.authService.storeToken(response.token);
        this.authService.storeToken(response);
        // Redirect or perform actions after successful login
        // For example, navigate to the home page
        this.router.navigate(['/crm']);
      });
  }

    valCheck: string[] = ['remember'];

    username!: string;
    password!: string;

    constructor(public layoutService: LayoutService,public authService: AuthService,public router: Router) { }
}
