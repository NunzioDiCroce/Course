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


  recuperaTodos = () => {
    return this.todosArray
  }

}
