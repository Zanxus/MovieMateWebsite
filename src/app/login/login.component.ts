import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  });

  constructor(private authService: AuthenticationService, private router: Router) {
    this.loginForm.valueChanges.subscribe((value => console.log(value)))
  }

  login(): void {
    if (this.loginForm.invalid) return;
    this.authService.login(this.loginForm.controls.username.value!, this.loginForm.controls.password.value!).subscribe(
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
    if (this.loginForm.invalid) return;
    this.authService.register(this.loginForm.controls.username.value!, this.loginForm.controls.password.value!).subscribe(
      success => {
        if (success) {
          this.authService.login(this.loginForm.controls.username.value!, this.loginForm.controls.password.value!)
          this.router.navigate(['/home']);
        } else {
          alert('Registration failed.');
        }
      }
    );
  }
}
