import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private http: HttpClient) {

  }
}
