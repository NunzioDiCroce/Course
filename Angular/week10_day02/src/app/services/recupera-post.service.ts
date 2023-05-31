import { Injectable } from '@angular/core';

// importazione interfaccia per gestione data base nel SERVICE
import { Post } from '../models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class RecuperaPostService {

  // definizione data base nel SERVICE (alternativa al js.son in assets)
  posts: Post [] = [
    {
      id: 1,
      body: 'Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.',
      title: 'Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.',
      active: true,
      type: 'news',
    },
    {
      id: 2,
      body: 'Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.',
      title: 'Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.',
      active: true,
      type: 'education',
    },
    {
      id: 3,
      body: 'Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.',
      title: 'Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.',
      active: false,
      type: 'politic',
    },
    {
      id: 4,
      body: 'Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.',
      title: 'Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.',
      active: false,
      type: 'news',
    },
    {
      id: 5,
      body: 'Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.',
      title: 'Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.',
      active: false,
      type: 'news',
    }
  ]

  constructor() { }

  // il SERVICE deve recuperare i post tramite fatch in assets/db.json SOLUZIONE ABBANDONATA
  /*recuperaPost = async () => {
    let promise = await fetch('assets/db.json');
        if (promise.ok) {
            return (await promise.json())
        } else {
            throw new Error('GET promise error')
        }
  }*/

  // il SERVICE recupera i post dal db al suo interno (NUOVA SOLUZIONE)
  recuperaPost = () => {
    return this.posts
  }
}
