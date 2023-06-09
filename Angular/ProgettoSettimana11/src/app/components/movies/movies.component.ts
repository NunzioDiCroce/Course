import { Component, OnInit } from '@angular/core';


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import { Movie } from 'src/app/model/movie.interface';
import { MoviesService } from 'src/app/services/movies.service';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {


  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  movies: Movie[] = [];
  constructor( private moviesSrv:MoviesService ) { }
  ngOnInit(): void {
    this.moviesSrv.getMovies().subscribe((_movies:Movie[]) => {this.movies = _movies})
    console.log(this.movies)
  }
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  /*ngOnInit(): void {
    this.moviesSrv.getMovies().subscribe((_movies: Movie[]) => {
        this.movies = _movies;
        console.log(this.movies);
    });
}*/

}
