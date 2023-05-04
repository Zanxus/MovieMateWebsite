import {inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, ResolveFn} from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Movie } from './models/movie';


@Injectable()

export class MovieResolver {
  constructor(private http: HttpClient) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Movie> {
    const imdbId = route.paramMap.get('id');
    return this.http.get<Movie>(`http://www.omdbapi.com/?apikey=f9b40a68&i=${imdbId}&plot=full`)
  }
}
export const movieResolver: ResolveFn<Movie> =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return inject(MovieResolver).resolve(route!);
  };
