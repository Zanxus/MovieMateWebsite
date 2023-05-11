import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {Movie} from "../models/movie";
import {map, Observable, of} from "rxjs";
import { TrackedMedia, TrackedState } from 'src/app/models/TrackedMedia';
import {AuthenticationService} from "../authentication.service";
import {TrackedMediaService} from "../tracked-media.service";
import {SteamingServiceAPIService} from "../steaming-service-api.service";
import {getXHRResponse} from "rxjs/internal/ajax/getXHRResponse";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie$! : Observable<Movie>;
  trackedMedia!: TrackedMedia;
  movie!: Movie;
  watchLinks$!: string[]
  imdbId!: string;
  public trackedStateOptions = [
    { label: 'Plan to Watch', value: TrackedState.PlanToWatch },
    { label: 'Watching', value: TrackedState.Watching },
    { label: 'Completed', value: TrackedState.Completed },
    { label: 'On Hold', value: TrackedState.OnHold },
    { label: 'Dropped', value: TrackedState.Dropped }
  ];

  public selectedState = TrackedState.PlanToWatch;

  constructor(private route: ActivatedRoute, private http: HttpClient, private mediaService: TrackedMediaService,private authService: AuthenticationService,private streamingService : SteamingServiceAPIService ) {
  }
  ngOnInit() {
    this.watchLinks$ = this.getStreamingServiceInfo()

    this.movie = this.route.snapshot.data['movie'];
    //this.movie$ = this.route.snapshot.data['movie'];
    console.log(this.movie, "mark test")
    this.movie$ = this.route.data.pipe(map(data => data["movie"]));
    //this.mediaService.getById("test", this.route.data.pipe<Movie>(movie => movie.));

    }


    getStreamingServiceInfo() :string[] {
      let watchList : string[] = []
      this.route.params.subscribe((params: Params) => {
          const id = params['id'];
          this.imdbId = params['id'];
          this.streamingService.getWatchLinksForMovie(id).subscribe((data: any) => {
            console.log("data",data)
            let danishstreamingInfo = data.result.streamingInfo.dk;
            console.log("danishstreamingInfo",danishstreamingInfo)
            if (!danishstreamingInfo.isUndefined()){
              for (let i = 0 ; i < Object.keys(danishstreamingInfo).length; i++) {
                console.log("streamingInfo", danishstreamingInfo[Object.keys(danishstreamingInfo)[i]][0])
                watchList.push(danishstreamingInfo[Object.keys(danishstreamingInfo)[i]][0].link);
              }
            }
        })
      });
      return watchList;
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

  trackMovie(): void {
    console.log(this.imdbId,"Id")
    console.log(this.authService.getUserId(),"user")
    console.log(this.selectedState,"state2")
    if (this.trackedMedia && this.trackedMedia.imdbId === this.imdbId) {
      // Update the tracked media if it already exists for this user and movie
      this.trackedMedia.trackedState = this.selectedState;
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
