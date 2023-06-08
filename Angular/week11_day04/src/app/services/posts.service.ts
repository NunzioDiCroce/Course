import { Injectable } from '@angular/core';

// interface import
import { Post } from '../models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  // data base nel service
  posts: Post[] = [
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
        id:5,
        body:"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
        title:"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
        active:false,
        type: "news"
    }
];

  constructor() { }

  // definizione metodo di recupero dei posts
  recuperaPosts() {
    return this.posts
  }

  // definizione metodo di recupero singolo post tramite metodo find(condizione)
  recuperaPost(_id:number) {
    this.posts.find((_post) => {_post.id ===_id})
  }

  // definzione metodo per aggiornamento della proprietà "type" dell'oggetto post
  aggiornaPost( _data: Partial<Post> , _id:number ) {
    //this.posts = this.posts.map((_post) => {_post.id === _id ? {..._post, ..._data} : _post});
    return this.posts.find((_post) => {_post.id === _id}) as Post
  }
}
