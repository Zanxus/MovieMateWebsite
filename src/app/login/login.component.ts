import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  rememberMe: boolean = false;

  constructor(private authService: AuthenticationService, private router: Router) { }

  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      success => {
        if (success) {
          this.router.navigate(['/home']);
        } else {
          alert('Login failed.');
        }
      }
    );
  }

  register(): void {
    this.authService.register(this.username, this.password).subscribe(
      success => {
        if (success) {
          this.router.navigate(['/home']);
        } else {
          alert('Registration failed.');
        }
      }
    );
  }
}
