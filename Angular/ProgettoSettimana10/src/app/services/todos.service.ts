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

  recuperaTodos = () => {
    return this.todosArray
  }

  todoPush = () => {
    let newTodo = {id: this.todosArray.length+1, title: 'test', completed: false}
    this.todosArray.push(newTodo);
    console.log(this.todosArray)
  }

}
