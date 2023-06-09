import { Component, OnInit } from '@angular/core';

// !!!!!!!!!! IMPORTS NECESSARI !!!!!!!!!!
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // definizione variabile "isLoading"
  isLoading = false;

  // inserimento parametri nel CONSTRUCTOR
  constructor(private authSrv: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  accedi(form: NgForm) {
    this.isLoading = true;
    console.log(form.value);
    try {
        this.authSrv.login(form.value).subscribe();
        this.isLoading = false;
        alert('Login effettuato!');
        this.router.navigate(['/']);
    } catch (error) {
        this.isLoading = false;
        alert('Login sbagliato!');
        console.error(error);
    }
  }
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

}
