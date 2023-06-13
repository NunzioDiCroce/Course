import { Component, OnInit } from '@angular/core';


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import { Router } from '@angular/router';
import { AuthData } from 'src/app/auth/auth-data.interface';
import { AuthService } from 'src/app/auth/auth.service';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  user!: AuthData | null;

  constructor( private router: Router, private authSrv:AuthService ) { }

  ngOnInit(): void {
    this.authSrv.user$.subscribe((_user) => {this.user = _user})
  }

  goToLogin() {
    this.router.navigate(['login'])
  }

  goToRegister() {
    this.router.navigate(['register'])
  }

  goToMovies() {
    this.router.navigate(['movies'])
  }
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


}
