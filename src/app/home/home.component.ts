import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MenuItem} from "primeng/api";
import {AuthenticationService} from "../authentication.service";
import {TrackedMediaService} from "../tracked-media.service";
import { TrackedMedia, TrackedState } from 'src/app/models/TrackedMedia';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
   trackedMediaList: TrackedMedia[] = [
    {
      id : 1,
      imdbId: 'tt1234567',
      trackedState: TrackedState.PlanToWatch,
      userId: "string",
      year: 2008,
      title: "The Top 14 Perform",
      watchLinks: []
    },
    {
      id: 2,
      imdbId: 'tt0315327',
      trackedState: TrackedState.Watching,
      userId: "string",
      year: 2003,
      title: "Bruce Almighty",
      watchLinks: []
    },
     {
       id: 3,
       imdbId: 'tt3456789',
       trackedState: TrackedState.PlanToWatch,
       userId: "string",
       year: 2001,
       title: "The Lord of the Rings: The Fellowship of the Ring",
       watchLinks: []
     },
    // Add more TrackedMedia objects as needed
  ];
  constructor(private http: HttpClient, private authService: AuthenticationService, private trackedMediaService : TrackedMediaService) {

  }

  protected readonly TrackedState = TrackedState;
  protected readonly Object = Object;
  SelectedState: any;
  IsLoggedIn : boolean = this.authService.isLoggedIn();
}

