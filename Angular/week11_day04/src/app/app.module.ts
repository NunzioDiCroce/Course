import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import Route, RouterModule
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ActivePostsComponent } from './components/active-posts/active-posts.component';
import { InactivePostsComponent } from './components/inactive-posts/inactive-posts.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

// definizione rotte
const routes: Route[] = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'activePosts',
    component:ActivePostsComponent
  },
  {
    path:'activePosts/:id',
    component:PostDetailsComponent
  },
  {
    path:'inactivePosts',
    component:InactivePostsComponent
  },
  {
    path:'inactivePosts/:id',
    component:PostDetailsComponent
  },
  {
    path:'users',
    component:UsersComponent,
    children:[
      {
        path:':id',
        component:UserDetailsComponent
      }
    ]
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'**',
    redirectTo:''
  }
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    UsersComponent,
    UserDetailsComponent,
    ActivePostsComponent,
    InactivePostsComponent,
    PostCardComponent,
    PostDetailsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    // metodo forRoot su RouterModule con parametro (routes)
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
