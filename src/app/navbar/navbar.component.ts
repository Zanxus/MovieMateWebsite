import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private authService: AuthenticationService) {
  }

  title = 'MovieMate';
  isLoggedIn : boolean = this.authService.isLoggedIn();
  menuItems: MenuItem[] = [
    { label: 'Home', routerLink: '/home' },
  ];

  logout(): void {
    this.authService.logout();
    window.location.reload();
  }

}
