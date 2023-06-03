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
  todosArray!: Todo[];

  // defininzione variabile per DATABINDING
  title!: string;

  // definizione variabili per setTimeout
  loadingRecuperaTodos: boolean = false;
  loadingInserisci: boolean = false;
  loadingCompletato: boolean = false;

  // dichiaro nel constructor del COMPONENT un parametro tipo SERVICE
  constructor(private TodosSrv: TodosService) { }

  ngOnInit(): void {
    // gestione setTimeout OnInit
    this.loadingRecuperaTodos = true;
    setTimeout( () => { this.todosArray = this.TodosSrv.recuperaTodos(), this.loadingRecuperaTodos = false }, 2000)
  }

  // definizione metodo che invoca il metodo del SERVICE passando come paramentro il valore da DATABINDING
  inserisci(_title:string) {
    this.loadingInserisci = true;
    setTimeout( () => { this.TodosSrv.todoPush(this.title), this.loadingInserisci = false }, 2000)
  }

  // definizione metodo che invoca il metodo del SERVICE per aggiornare l'object nell'array. Il metodo prevede 2 parametri: il primo è l'id dell'object, il secondo è l'indice dell'array necessarie per il map che effettuerà il metodo del SERVICE. Il metodo del component aggiorna lo stato da true a false ed effettua lo splice per sostituire l'oggetto modificato.
  /*completato(_id:number, _arrayIndex:number) {
    this.TodosSrv.todoUpdate({completed:false}, _id);
    this.todosArray.splice(_arrayIndex, 1);
    console.log(this.todosArray)
  }*/

  // definizione metodo che invoca metodo SERVICE per aggiornare array object property
  completato(_id:number) {
    this.loadingCompletato = true;
    setTimeout( () => { this.TodosSrv.todoUpdate(_id), this.loadingCompletato = false }, 2000)
  }

}
