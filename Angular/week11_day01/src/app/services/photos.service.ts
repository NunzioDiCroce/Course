import { Injectable } from '@angular/core';

// interface import
import { Photos } from '../models/photos.interface';

// HttpClient import
import { HttpClient } from '@angular/common/http';

// operators import
import { map, catchError } from 'rxjs/operators';

// Observable, Subscription, throwError import
import { Observable, Subscription, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  // definizione variabile per contare le foto preferite
  favouritesPhotos:number = 0;

  constructor( private http:HttpClient ) { } // inserimento in constructor del paramentro HttpClient

  // definizione metodo per recuperare le foto da API e gestione messaggio di errore tramite metodo dedicato
  getPhotos() {
    return this.http.get<Photos[]>('https://jsonplaceholder.typicode.com/photos').pipe(catchError(error => {
      return throwError(this.errorMessage(error.status))
    }))
  }

  // definizione metodo per eliminare una foto e gestione messaggio di errore tramite metodo dedicato
  deletePhoto(id:number) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/photos/${id}`).pipe(catchError(error => {
      return throwError(this.errorMessage(error.status))
    }
    ))
  }

  // definizione metodo per incrementare il numero di foto preferite
  addToFavourites() {
    this.favouritesPhotos ++
  }


  // definizione metodo gestione errori e relativo messaggio
  errorMessage (status:number) {
    // definizione variabile messaggio
    let message = '';
    // struttura switch
    switch (status) {
      // primo caso
      case 404:
        message = '404: errore nella chiamata'
        break;
      // caso di default
      default:
        message = 'controllare la connessione'
        break;
    }
    return message
  }


}
