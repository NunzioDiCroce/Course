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
  favoriteMovies: Favorite[] = [];
  favoriteMovie!: Favorite | null;
  sub!: Subscription;
  favoriteSub!: Subscription;

  constructor( private moviesSrv:MoviesService, private authSrv:AuthService ) { }

  ngOnInit(): void {

    this.authSrv.user$.subscribe((_user) => {
      this.user = _user
    });
    console.log(this.user);

    this.moviesSrv.getMovies().subscribe((_movies:Movie[]) => {
      this.movies = _movies
    });
    console.log(this.movies);

    this.moviesSrv.getFavorites(this.user?.user.id!).subscribe((_favoriteMovies:Favorite[]) => {
      this.favoriteMovies = _favoriteMovies
    });
    console.log(this.favoriteMovies)

  }

  likedMovies(_movieId:number) {
    return this.favoriteMovies.some((_favoriteMovie) => {
      _favoriteMovie.id === _movieId
    })
  }

  iLikeMovie(_movieId:number, _userId:number) {
    const movieWithLike = this.likedMovies(_movieId);
    const favoriteMovieId = this.favoriteMovies.find((_favoriteMovie) => {
      _favoriteMovie.id === _movieId
    })?.id;

    this.favoriteMovie = {movieId: _movieId, userId: _userId, id: favoriteMovieId!}

    if(movieWithLike) {
      if(this.favoriteMovie.id !== undefined) {
        this.moviesSrv.deleteLike(this.favoriteMovie.id).subscribe(() => {
          this.favoriteMovies = this.favoriteMovies.filter((_favoriteMovie) => {
            _favoriteMovie.id !== _movieId
          })
        })
      } else {
        this.moviesSrv.like(this.favoriteMovie).subscribe((_newFavoriteMovie:Favorite) => {
          this.favoriteMovies.push(_newFavoriteMovie)
        })
      }
    }
  }

  ngOnDestroy():void {
    if(this.sub) {
      this.sub.unsubscribe()
    }
    if(this.favoriteSub) {
      this.favoriteSub.unsubscribe()
    }
  }
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


}
