import { Component, OnInit } from '@angular/core';


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import { Movie } from 'src/app/model/movie.interface';
import { MoviesService } from 'src/app/services/movies.service';
import { AuthData } from 'src/app/auth/auth-data.interface';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';
import { Favorite } from 'src/app/model/favorite.interface';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {


  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  user!: AuthData | null;
  movies: Movie[] = [];
  favoriteMovies:Favorite[] = [];

  constructor( private moviesSrv:MoviesService, private authSrv:AuthService ) { }

  ngOnInit(): void {

    this.authSrv.user$.subscribe((_user) => {this.user = _user});
    console.log(this.user);

    this.moviesSrv.getMovies().subscribe((_movies:Movie[]) => {this.movies = _movies});
    console.log(this.movies);

    this.moviesSrv.getFavorites(this.user?.user.id!).subscribe((_favoriteMovies:Favorite[]) => {this.favoriteMovies = _favoriteMovies});
    console.log(this.favoriteMovies)

  }
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


}
