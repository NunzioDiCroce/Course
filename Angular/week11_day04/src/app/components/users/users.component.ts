import { Component, OnInit } from '@angular/core';

// interface import
import { User } from 'src/app/models/user.interface';

// service import
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  // definizione array users
  users!: User[];

  // inserimento parametro UserService nel constructor
  constructor( private usersSrv: UsersService ) { }

  ngOnInit(): void {

    // definizione metodo COMPONENT per recuperare gli users invocando il metodo SERVICE
    this.users = this.usersSrv.recuperaUsers();
  }

}
