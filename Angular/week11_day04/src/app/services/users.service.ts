import { Injectable } from '@angular/core';

// interface import
import { User } from '../models/user.interface';

// environment import
import { environment } from 'src/environments/environment';

// HttpClient import per recuperare utenti da db.json
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // data base nel service
  users: User[] = [
    {
        name: 'Dario',
        surname: 'Del Giudice',
        email: 'dadegi@gmail.com',
        id: 1
    },
    {
        name: 'Mario',
        surname: 'Rossi',
        email: 'mario@rossi.com',
        id: 2
    },
    {
        name: 'Anna',
        surname: 'Bianchi',
        email: 'anna@bianchi.com',
        id: 3
    }
];

  //constructor() { }

  // definizione metodo per recuperare gli utenti
  /*recuperaUsers() {
    return this.users
  }*/

  // definizione metodo per recuperare un utente specifico
  recuperaUser(_id:number) {
    return this.users.find((_user) => {_user.id === _id})
  }


  // definizione variabili, costruttore, metodi per RECUPERO UTENTI DA DB.JSON
  baseURL = environment.baseURL;
  constructor( private http:HttpClient ) {}
  recuperaUsers() {
    return this.http.get<User[]>(`${this.baseURL}users`)
  }
}
