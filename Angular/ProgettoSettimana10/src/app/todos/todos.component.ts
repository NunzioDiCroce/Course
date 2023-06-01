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
    title: string | undefined;

  // dichiaro nel constructor del COMPONENT un parametro tipo SERVICE
  constructor(private TodosSrv: TodosService) { }

  ngOnInit(): void {
  }

  inserisci() {
    this.TodosSrv.todoPush()
  }

}
