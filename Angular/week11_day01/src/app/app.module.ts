import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// HttpClientModule, HTTP_INTERCEPTORS import
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppComponent } from './app.component';

// interceptor import
import { ErrorsInterceptor } from './interceptors/errors.interceptor';

import { FavoritesComponent } from './components/favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    // inserimento in imports di HttpClientModule
    HttpClientModule
  ],
  // inserimento in providers di HTTP_INTERCEPTORS
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:ErrorsInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
