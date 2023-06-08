import { Component, OnInit } from '@angular/core';

// interface import
import { User } from 'src/app/models/user.interface';
// service import
import { UsersService } from 'src/app/services/users.service';

// !!!!!!!!!! ActivatedRoute from @angular/router import !!!!!!!!!!
import { ActivatedRoute } from '@angular/router';

// !!!!!!!!!! Subscription from @rxjs import !!!!!!!!!!
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  // !!!!!!!!!! definzione variabile per SUBSCRIPTION/SUBSCRIBE !!!!!!!!!!
  sub!: Subscription;

  // definzione variabile user
  user!: User | undefined;

  // !!!!!!!!!! inserimento parametri nel constructor. ActivatedRouter !!!!!!!!!!
  constructor( private userSrv:UsersService, private router:ActivatedRoute ) { }

  ngOnInit(): void {
    // !!!!!!!!!!! definizione metodo per raggiungere i dettagli dello user selezionato in base ad uno dei parametri ovvero lo user.id !!!!!!!!!!!
    this.sub = this.router.params.subscribe((_parameters) => {
      const idOfUser = +_parameters['id'];
      this.user = this.userSrv.recuperaUser(idOfUser)
    })
  }

  // !!!!!!!!!! definizione ngOnDestroy per UNSUBSCRIBE !!!!!!!!!!!
  ngOnDestroy(): void {
    // !!!!!!!!! definizione metodo di unsubscribe all'OnDestroy !!!!!!!!!!
    this.sub.unsubscribe()
  }

}
