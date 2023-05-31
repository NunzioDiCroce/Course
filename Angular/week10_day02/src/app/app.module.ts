import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// importo Route e RouterModule per implementare il ROUTING
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostAttiviComponent } from './post-attivi/post-attivi.component';
import { PostNonAttiviComponent } from './post-non-attivi/post-non-attivi.component';
import { CardComponent } from './card/card.component';

// dichiaro array routes per implementare il ROUTING
const routes: Route[] = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'postAttivi',
    component: PostAttiviComponent
  },
  {
    path: 'postNonAttivi',
    component: PostNonAttiviComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostAttiviComponent,
    PostNonAttiviComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    // per implementare il ROUTING applico a RouterModule il metodo forRoot con parametro l'array routes dichiarato
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
