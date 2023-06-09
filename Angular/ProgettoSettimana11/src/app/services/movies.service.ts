import { Injectable } from '@angular/core';


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import { Movie } from '../model/movie.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  constructor( private http:HttpClient ) { }
  getMovies() {
    return this.http.get<Movie[]>('http://localhost:3000/movies-popular')
  }
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


}
