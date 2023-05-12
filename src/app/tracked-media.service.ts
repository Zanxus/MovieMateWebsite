import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {forkJoin, Observable} from "rxjs";
import {TrackedMedia, TrackedMediaSimple, TrackedState} from "./models/TrackedMedia";
import {AuthenticationService} from "./authentication.service";
import {map} from "rxjs/operators";
import {Params} from "@angular/router";
import {Movie} from "./models/movie";
import {TrackedListMedia} from "./models/trackedListMedia";

@Injectable({
  providedIn: 'root'
})
export class TrackedMediaService {
  private apiUrl = 'http://localhost:5001/api/TrackedMedia'; // replace with your API endpoint
  private userTrackedMedia: TrackedMedia[] = [];
  constructor(private http: HttpClient, private auth: AuthenticationService) { }

  getAll(): Observable<TrackedMedia[]> {
    return this.http.get<TrackedMedia[]>(this.apiUrl);
  }

  getById(id: string, trackedMediaId : string): Observable<TrackedMedia> {
    return this.http.get<TrackedMedia>(`${this.apiUrl}/${id}/${trackedMediaId}`);
  }
  getAllByUserId(id: string): Observable<TrackedMedia[]> {
    return this.http.get<TrackedMedia[]>(`${this.apiUrl}/${id}`);
  }
  create(trackedMedia: TrackedMedia): Observable<TrackedMedia> {
    return this.http.post<TrackedMedia>(this.apiUrl, trackedMedia);
  }

  update(trackedMedia: TrackedMedia): Observable<any> {
    return this.http.put(`${this.apiUrl}/${trackedMedia.id}`, trackedMedia);
  }

  delete(id: number): Observable<object> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getuserMedia() :TrackedMedia[] {
    if (this.auth.isLoggedIn()){
      let id = this.auth.getUserId();
      this.getAllByUserId(id)
        .subscribe(data => {data.forEach(x => this.userTrackedMedia.push(x))})


      console.log(this.userTrackedMedia, "userData")
      let movielist : Movie[] = []

      this.userTrackedMedia.forEach(data => console.log(data.imdbId))
      this.userTrackedMedia.forEach( trackedMedia => this.http.get<Movie>(`http://www.omdbapi.com/?apikey=f9b40a68&i=${trackedMedia.imdbId}&plot=full`).subscribe(data => movielist.push(data) ))

      console.log(movielist, "movies")

      return this.userTrackedMedia
    }else {
      return []
    }
  }


getuserMediaV2() : TrackedListMedia[] {
  if (this.auth.isLoggedIn()){
    let result : TrackedListMedia[] = []
    let id = this.auth.getUserId();
    this.getAllByUserId(id)
      .subscribe(data => {
        data.forEach(trackedMedia =>
          this.http.get<Movie>(`http://www.omdbapi.com/?apikey=f9b40a68&i=${trackedMedia.imdbId}&plot=full`).subscribe(movie =>
        console.log(result.push({title: movie.Title, trackedState: trackedMedia.trackedState, year: movie.Year, imdbId: trackedMedia.imdbId, id : trackedMedia.id, userId: trackedMedia.userId , watchLinks: [] })),

      ))
  console.log(result)
      })


    return result

  }
  return []
}
  }

