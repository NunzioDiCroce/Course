import { Component, OnInit } from '@angular/core';


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import { Movie } from 'src/app/model/movie.interface';
import { MoviesService } from 'src/app/services/movies.service';
import { AuthData } from 'src/app/auth/auth-data.interface';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';
import { Favorite } from 'src/app/model/favorite.interface';
//import { Router } from '@angular/router';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {


  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  user!: AuthData | null;
  movies: Movie[] | undefined;
  favoriteMovies: Favorite[] | undefined;
  favoriteMovie!: Favorite | null;
  sub!: Subscription;
  favoriteSub!: Subscription;


  constructor( private moviesSrv:MoviesService, private authSrv:AuthService ) { }

  ngOnInit(): void {

    this.authSrv.user$.subscribe((_user) => {
      this.user = _user;
      console.log(this.user)
    });

    this.sub = this.moviesSrv.getMovies().subscribe((_movies:Movie[]) => {
      this.movies = _movies;
      console.log(this.movies)
    });

    this.favoriteSub = this.moviesSrv.getFavorites(this.user?.user.id!).subscribe((_favoriteMovies:Favorite[]) => {
      this.favoriteMovies = _favoriteMovies;
      console.log(this.favoriteMovies)
    })

  }

  iLikeMovie(_movieId:number, _userId:number) {
    const liked = this.likedMovie(_movieId);
    const favoriteMovieId = this.favoriteMovies?.find((_favorite) => {
      _favorite.movieId === _movieId
    })?.id;

    this.favoriteMovie = {movieId: _movieId, userId: _userId, id: favoriteMovieId}

    if(liked) {
      if(this.favoriteMovie.id !== undefined) {
        this.moviesSrv.deleteFavorite(this.favoriteMovie.id).subscribe(() => {
          this.favoriteMovies = this.favoriteMovies?.filter(_favorite =>
            _favorite.movieId !== _movieId)
        })
      }
    } else {
      this.moviesSrv.like(this.favoriteMovie).subscribe((_newFavoriteMovie:Favorite) => {
        this.favoriteMovies?.push(_newFavoriteMovie)
      })
    }
  }

  likedMovie(_movieId:number):boolean {
    return this.favoriteMovies?.some((_favorite) => {
      _favorite.movieId === _movieId}) || false
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
