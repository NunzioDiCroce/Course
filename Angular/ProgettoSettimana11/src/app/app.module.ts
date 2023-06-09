import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  /*{
    path:'login',
    component:LoginComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'register',
    component:RegisterComponent,
    canActivate: [AuthGuard]
  },*/
  {
    path:'**',
    redirectTo:''
  }
]
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviesComponent,
    ProfileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    RouterModule.forRoot(routes),
    HttpClientModule
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
