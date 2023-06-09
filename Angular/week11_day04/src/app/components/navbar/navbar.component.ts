import { Component, OnInit } from '@angular/core';

// !!!!!!!!!! IMPORTS NECESSARI !!!!!!!!!!
import { AuthData } from 'src/app/auth/auth-data.interface';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  // definzione variabile user
  user!: AuthData | null;

  // inserimento parametro nel CONSTRUCTOR
  constructor( private authSrv: AuthService ) { }

  ngOnInit(): void {

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    this.authSrv.user$.subscribe((_user) => {
      this.user = _user;
    });
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  logout() {
    this.authSrv.logout();
  }
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

}
