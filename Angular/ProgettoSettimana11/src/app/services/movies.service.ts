import { Injectable } from '@angular/core';


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import { Movie } from '../model/movie.interface';
import { HttpClient } from '@angular/common/http';
//import { environment } from 'src/environments/environment';
import { Favorite } from '../model/favorite.interface';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


@Injectable({
  providedIn: 'root'
})
export class MoviesService {


  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  constructor( private http:HttpClient ) { }
  getMovies() {
    return this.http.get<Movie[]>('http://localhost:4201/movies-popular')
  }

  like(favoriteMovie:Favorite) {
    return this.http.post<Favorite>('http://localhost:4201/favorites',favoriteMovie)
  }

  getFavorites(_id:number) {
    return this.http.get<Favorite[]>(`http://localhost:4201/favorites?userId=${_id}`)
  }

  deleteLike(_id:number) {
    return this.http.delete(`http://localhost:4201/favorites/${_id}`)
  }
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


}
