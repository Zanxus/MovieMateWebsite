import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, subscribeOn} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SteamingServiceAPIService {

  constructor(private http : HttpClient) { }

  getWatchLinksForMovie(imdbid : string) : any{
    const requestOptions = {headers: {
        'X-RapidAPI-Key': '30d5fd691fmsh13eb1a4383dbe8fp17a705jsn34100c4c1140',
        'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
      },
      params: {
        country: 'dk',
        imdb_id: imdbid,
        output_language: 'en'
      }}
      return this.http.get("https://streaming-availability.p.rapidapi.com/v2/get/basic",requestOptions);
  }
}
