import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import {MovieResolver, movieResolver} from "./movie.resolver";
import {Observable} from "rxjs";
import {Movie} from "./models/movie";


const routes: Routes = [
  { path: 'home', component: HomeComponent,pathMatch : 'full' },
  { path: 'details/:id', component: MovieDetailsComponent,pathMatch : 'full' ,data : Observable<Movie>,
   resolve: {movie: movieResolver }},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [MovieResolver]
})
export class AppRoutingModule { }
