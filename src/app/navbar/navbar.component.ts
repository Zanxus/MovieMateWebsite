import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title = 'MovieMate';
  menuItems: MenuItem[] = [
    { label: 'Home', routerLink: '/home' },

  ];
}
