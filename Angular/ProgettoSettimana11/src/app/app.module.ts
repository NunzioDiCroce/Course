import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth/auth.guard';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'movies',
    component: MoviesComponent,
    //canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    //canActivate: [AuthGuard]
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'register',
    component:RegisterComponent,
  },
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
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
