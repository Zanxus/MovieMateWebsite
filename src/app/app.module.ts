import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { ButtonModule} from "primeng/button";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {TableModule} from "primeng/table";
import {AutoCompleteModule} from "primeng/autocomplete";
import { SearchBarComponent } from './search-bar/search-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import {AppRoutingModule} from "./app-routing.module";
import { CardModule } from 'primeng/card';
import {MenubarModule} from "primeng/menubar";
import { LoginComponent } from './login/login.component';
import {InputTextModule} from "primeng/inputtext";
import {CheckboxModule} from "primeng/checkbox";
import {PanelModule} from "primeng/panel";
import {PasswordModule} from "primeng/password";
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchBarComponent,
    MovieDetailsComponent,
    LoginComponent,
    NavbarComponent,
  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ButtonModule,
        TableModule,
        AutoCompleteModule,
        BrowserAnimationsModule,
        RouterModule,
        AppRoutingModule,
        CardModule,
        MenubarModule,
        InputTextModule,
        CheckboxModule,
        PanelModule,
        PasswordModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
