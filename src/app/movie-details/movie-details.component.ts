import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {Movie} from "../models/movie";
import {map, Observable, of} from "rxjs";
import {switchMap } from 'rxjs/operators';
import { TrackedMedia, TrackedState } from 'src/app/models/TrackedMedia';
import {AuthenticationService} from "../authentication.service";
import {TrackedMediaService} from "../tracked-media.service";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie$! : Observable<Movie>;
  trackedMedia!: TrackedMedia;
  movie!: Movie;
  public trackedStateOptions = [
    { label: 'Plan to Watch', value: TrackedState.PlanToWatch },
    { label: 'Watching', value: TrackedState.Watching },
    { label: 'Completed', value: TrackedState.Completed },
    { label: 'On Hold', value: TrackedState.OnHold },
    { label: 'Dropped', value: TrackedState.Dropped }
  ];

  public selectedState = TrackedState.PlanToWatch;

  constructor(private route: ActivatedRoute, private http: HttpClient, private mediaService: TrackedMediaService,private authService: AuthenticationService ) {
  }

  getMovieDetails(id: string) {
    this.http.get(`http://www.omdbapi.com/?apikey=f9b40a68&i=${id}&plot=full`).subscribe((res: any) => {
      this.movie$ = res;
    });
  }
  ngOnInit() {
    this.movie = this.route.snapshot.data['movie'];
    this.movie$ = this.route.snapshot.data['movie'];
    console.log(this.movie, "mark test")
    this.movie$ = this.route.data.pipe(map(data => data["movie"]));
    this.mediaService.getById("test", this.movie.ImdbID);
    }

  trackMedia(state: TrackedState) {
    this.movie$.subscribe(movie => {
      //this.mediaService.create().subscribe();
    });
  }
    untrackMedia() {
        //this.mediaService.delete(trackedMedia.id).subscribe();
    }

  isTracked(imdbId: string, state: TrackedState): boolean {
    return !!this.trackedMedia && this.trackedMedia.imdbId === imdbId && this.trackedMedia.trackedState === state;
  }

  trackMovie(imdbId: string, state: TrackedState): void {
    if (this.trackedMedia && this.trackedMedia.imdbId === imdbId) {
      // Update the tracked media if it already exists for this user and movie
      this.trackedMedia.trackedState = state;
      //this.trackedMediaService.update(this.trackedMedia).subscribe();
    } else {
      // Create a new tracked media if it doesn't exist yet for this user and movie
      //const newTrackedMedia: TrackedMedia = {

        //imdbId: imdbId,
        //trackedState: state
      //};
      //this.trackedMediaService.create(newTrackedMedia).subscribe(tm => this.trackedMedia = tm);
    }
  }

}
