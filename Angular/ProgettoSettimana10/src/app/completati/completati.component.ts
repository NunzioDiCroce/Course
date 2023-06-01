import { Component, OnInit } from '@angular/core';

// import INTERFACE
import { Todo } from '../models/todo.interface';

// import SERVICE
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent implements OnInit {

    // definizione array vuoto
    todosArray: Todo[] = [];

  // dichiaro nel constructor del COMPONENT un parametro tipo SERVICE
  constructor(private TodosSrv: TodosService) { }

  ngOnInit(): void {
    // visto che il metodo "inserisci" invoca il metodo todoPush del SERVICE che a sua volta effettua il PUSH dell'oggetto nell'array del SERVICE, è necessario dire ARRAY COMPONENT = ARRAY SERVICE
    this.todosArray = this.TodosSrv.todosArray
  }

}
