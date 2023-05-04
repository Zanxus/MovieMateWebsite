import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TrackedMedia} from "./models/TrackedMedia";

@Injectable({
  providedIn: 'root'
})
export class TrackedMediaService {
  private apiUrl = 'api/trackedmedia'; // replace with your API endpoint

  constructor(private http: HttpClient) { }

  getAll(): Observable<TrackedMedia[]> {
    return this.http.get<TrackedMedia[]>(this.apiUrl);
  }

  getById(id: string, trackedMediaId : string): Observable<TrackedMedia> {
    return this.http.get<TrackedMedia>(`${this.apiUrl}/${id}/${trackedMediaId}`);
  }

  create(trackedMedia: TrackedMedia): Observable<TrackedMedia> {
    return this.http.post<TrackedMedia>(this.apiUrl, trackedMedia);
  }

  update(trackedMedia: TrackedMedia): Observable<any> {
    return this.http.put(`${this.apiUrl}/${trackedMedia.id}`, trackedMedia);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
