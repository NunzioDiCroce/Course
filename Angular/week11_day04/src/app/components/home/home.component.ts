import { Component, OnInit } from '@angular/core';

// !!!!!!!!!! Router import !!!!!!!!!!
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // inserimento parametro Router nel CONSTRUCTOR per implementare routign dagli homepage button alle navbar sections
  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  // metodo routing da homepage button a navbar section
  vaiAttivi() {
    this.router.navigate(['activePosts'])
  }

  // metodo routing da homepage button a navbar section
  vaiInattivi() {
    this.router.navigate(['inactivePosts'])
  }

}
