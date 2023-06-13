import { Component, OnInit } from '@angular/core';


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  isLoading = false;

  constructor( private authSrv:AuthService, private router:Router ) { }

  ngOnInit(): void {
  }

  // metodo di registrazione CON gestione degli errori
  registra(form:NgForm) {
    this.isLoading = true;
    console.log(form.value);
    try {
      this.authSrv.signup(form.value).subscribe(
        () => {
          this.router.navigate(['/login']);
          this.isLoading = false
        },
        (error) => {
          console.error(error.error);
          if(error.error === 'Email format is invalid') {
            alert('Email format is invalid!')
          } else if(error.error === 'Email already exists') {
            alert('Email already exists!')
          } else if(error.error === 'Password is too short') {
            alert('Password must be at least 4 characters!')
          }
          this.isLoading = false
        }
      );
    } catch(error) {
      console.error(error);
      this.isLoading = false
    }
  }

  // metodo di registrazione SENZA gestione errori
  /*registra(form:NgForm) {
    this.isLoading = true;
    console.log(form.value);
    try {
      this.authSrv.signup(form.value).subscribe();
      this.router.navigate(['/login']);
      this.isLoading = false
    } catch(error:any) {
      console.log(error);
      if(error.status == 400) {
        alert('Email already exists');
        this.router.navigate(['/register'])
      }
      this.isLoading = false
    }
  }*/
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


}
