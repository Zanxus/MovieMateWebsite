import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {Movie} from "../models/movie";
import {map, Observable, of} from "rxjs";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie$! : Observable<Movie>;
  movie!: Movie;
  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }

  getMovieDetails(id: string) {
    this.http.get(`http://www.omdbapi.com/?apikey=f9b40a68&i=${id}&plot=full`).subscribe((res: any) => {
      this.movie$ = res;
    });
  }
  ngOnInit() {
    this.movie$ = this.route.data.pipe(map(data => data["movie"]));
    console.log(this.movie$, "test")
  }
}
