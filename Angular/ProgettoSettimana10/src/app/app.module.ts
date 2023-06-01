import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// importo Route, RouterModule per ROUTING
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { CompletatiComponent } from './completati/completati.component';

// dichiaro routes array per ROUTING
const routes: Route[] = [
  {
    path: 'todos',
    component: TodosComponent
  },
  {
    path: 'completati',
    component: CompletatiComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    CompletatiComponent
  ],
  imports: [
    BrowserModule,
    // metodo forRoot su RouterModule con parametro routes per ROUTING
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
