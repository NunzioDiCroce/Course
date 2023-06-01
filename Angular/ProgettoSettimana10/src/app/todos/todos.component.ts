import { Component, OnInit } from '@angular/core';

// import INTERFACE
import { Todo } from '../models/todo.interface';

// import SERVICE
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

    // definizione array vuoto
    todosArray: Todo[] = [];

    // defininzione variabile per DATABINDING
    title!: string;

  // dichiaro nel constructor del COMPONENT un parametro tipo SERVICE
  constructor(private TodosSrv: TodosService) { }

  ngOnInit(): void {
    // visto che il metodo "inserisci" invoca il metodo todoPush del SERVICE che a sua volta effettua il PUSH dell'oggetto nell'array del SERVICE, è necessario dire ARRAY COMPONENT = ARRAY SERVICE
    this.todosArray = this.TodosSrv.todosArray
  }

  // definizione metodo che invoca il metodo del SERVICE passando come paramentro il valore da DATABINDING
  inserisci(_title:string) {
    this.TodosSrv.todoPush(this.title);
  }

}