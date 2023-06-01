import { Injectable } from '@angular/core';

// import INTERFACE
import { Todo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  // definizione array vuoto
  todosArray: Todo[] = []

  constructor() { }

  // definizione metodo per PUSH nuovo oggetto in array dei todos
  todoPush = (_title:string) => {
    let newTodo = {id: this.todosArray.length+1, title: _title, completed: false}
    this.todosArray.push(newTodo);
    console.log(this.todosArray)
  }

  // metodo map (ciclo su array) su array dei todos con verifica tramite operatore ternario dell'object id. Quando l'operatore trova lo stesso id (true) inserisce …data in …item altrimenti (false) prende l'item così come è ovvero senza modifiche
  todoUpdate (_data: Partial<Todo>, _id:number) {
    this.todosArray = this.todosArray.map((item) =>
      item.id == _id ? { ...item, ..._data } : item
    );
    return this.todosArray.find((item) => item.id) as Todo
  }

  recuperaTodos = () => {
    return this.todosArray
  }

}
