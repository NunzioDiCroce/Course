import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs'; // aggiunto import throwError

// catchError import
import { catchError } from 'rxjs/operators';


@Injectable()
export class ErrorsInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //return next.handle(request); NATIVO DELL'INTERCEPTOR, COMMENTATO

    // stampa in console.log dell'errore
    return next.handle(request).pipe(catchError(error => {
      console.log('errore' + error);
      return throwError(error)
    }))

  }
}
