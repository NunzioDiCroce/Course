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
  todosArray!: Todo[];

  // definizione variabili per setTimeout
  loadingRecuperaTodos: boolean = false;

  // dichiaro nel constructor del COMPONENT un parametro tipo SERVICE
  constructor(private TodosSrv: TodosService) { }

  ngOnInit(): void {
    // gestione setTimeout OnInit
    this.loadingRecuperaTodos = true;
    setTimeout( () => { this.todosArray = this.TodosSrv.recuperaTodos(), this.loadingRecuperaTodos = false }, 2000)
  }

}
