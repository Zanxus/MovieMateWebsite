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
  title = 'MovieMate';
  menuItems: MenuItem[] = [
    { label: 'Home', routerLink: '/home' },

  ];
  constructor(private http: HttpClient) {

  }

  getMovies(search : string) : Observable<Movie[]>{
    return this.http.get<Movie[]>("www.omdbapi.com/?apikey=f9b40a68&s="+search);
  }

  protected readonly Title = this.title;
}


class Movie {
  public movie : string;
  public year : number;
  public imdbID : string;
  public type : string;
  public poster : string;

  public constructor(movie :string,year : number,imdbID :string,type : string, poster :string) {
    this.movie = movie;
    this.year = year;
    this.imdbID = imdbID;
    this.type = type;
    this.poster = poster;
  }
}
