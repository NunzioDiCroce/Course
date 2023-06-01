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

  // dichiaro nel constructor del COMPONENT un parametro tipo SERVICE
  constructor(private TodosSrv: TodosService) { }

  ngOnInit(): void {
    // visto che il metodo "inserisci" invoca il metodo todoPush del SERVICE che a sua volta effettua il PUSH dell'oggetto nell'array del SERVICE, è necessario dire ARRAY COMPONENT = ARRAY SERVICE
    //this.todosArray = this.TodosSrv.todosArray
    this.todosArray = this.TodosSrv.recuperaTodos()
  }

  // definizione metodo che invoca il metodo del SERVICE passando come paramentro il valore da DATABINDING
  inserisci(_title:string) {
    this.TodosSrv.todoPush(this.title)
  }

  // definizione metodo che invoca il metodo del SERVICE per aggiornare l'object nell'array. Il metodo prevede 2 parametri: il primo è l'id dell'object, il secondo è l'indice dell'array necessarie per il map che effettuerà il metodo del SERVICE. Il metodo del component aggiorna lo stato da true a false ed effettua lo splice per sostituire l'oggetto modificato.
  /*completato(_id:number, _arrayIndex:number) {
    this.TodosSrv.todoUpdate({completed:false}, _id);
    this.todosArray.splice(_arrayIndex, 1);
    console.log(this.todosArray)
  }*/

  // definizione metodo che invoca metodo SERVICE per aggiornare array object property
  completato(_id:number) {
    this.TodosSrv.todoUpdate(_id)
  }

}
