import { Component, OnInit } from '@angular/core';


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  isLoading = false;

  constructor( private authSrv:AuthService, private router:Router ) { }

  ngOnInit(): void {
  }

  accedi(form:NgForm) {
    this.isLoading = true;
    console.log(form.value);
    try {
      this.authSrv.login(form.value).subscribe();
      this.isLoading = false;
      alert('Login success!')
    } catch(error:any) {
      this.isLoading = false;
      alert('Wrong login!');
      console.log(error)
    }
    this.router.navigate(['/']);
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



}
