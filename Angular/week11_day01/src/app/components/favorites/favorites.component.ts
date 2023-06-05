import { Component, OnInit } from '@angular/core';

// service import
import { PhotosService } from 'src/app/services/photos.service';

// operators import
import { map, catchError } from 'rxjs/operators';

// Observable, Subscription, throwError import
import { Observable, Subscription, throwError, Subject } from 'rxjs';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  // definizione variabile per contare le foto preferite
  totalFavouritesPhotos:number = 0;

  constructor(private photosSrv: PhotosService) { }

  ngOnInit(): void {
    // component subscribe del Subject ed assegnazione valore variabile component = variabile service
    this.photosSrv.favouritesSubject.subscribe((_favouritesPhotos) => {
      this.totalFavouritesPhotos = _favouritesPhotos
    })
  }

}
