import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  searchTerm: string = "";
  suggestions: any[] = [];

  constructor(private http: HttpClient, private  router : Router) {}

  search(event : any) {
    const query = event.query;
    this.http.get(`http://www.omdbapi.com/?apikey=f9b40a68&s=${query}`)
      .subscribe((res: any) => {
        this.suggestions = res.Search;
      });
  }

  onResultSelected(result: any) {
    this.router.navigate(['/details/', result.imdbID]);
  }

  selectFirstResult() {
    if (this.suggestions && this.suggestions.length > 0) {
      this.onResultSelected(this.suggestions[0]);
    }
  }

}

