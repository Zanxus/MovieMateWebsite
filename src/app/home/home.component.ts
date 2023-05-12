import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "../authentication.service";
import {TrackedMediaService} from "../tracked-media.service";
import {TrackedMedia, TrackedState} from 'src/app/models/TrackedMedia';
import {TrackedListMedia} from "../models/trackedListMedia";
import {Movie} from "../models/movie";
import {forkJoin, Observable, timeout} from "rxjs";


@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  trackedMediaList : TrackedMedia[] = this.trackedMediaService.getuserMediaV2();
  constructor(private http: HttpClient, private authService: AuthenticationService, private trackedMediaService : TrackedMediaService) {

  }

  ngOnInit(){
  }

  listDelete(id : number){

    this.trackedMediaService.delete(id).subscribe({
      next : (value: any) => {

        console.log(value)
        setTimeout(() => {
          location.reload()
        },500)
      },
      error:(err: any) => {
        console.log(err)
      },
      complete:() => {

      }
    });


  }

  protected readonly TrackedState = TrackedState;
  protected readonly Object = Object;
  SelectedState: any;
  IsLoggedIn : boolean = this.authService.isLoggedIn();
}

