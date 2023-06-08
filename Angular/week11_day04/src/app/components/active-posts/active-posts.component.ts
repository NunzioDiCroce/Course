import { Component, OnInit } from '@angular/core';

// interface import
import { Post } from 'src/app/models/post.interface';

// service import
import { PostsService } from 'src/app/services/posts.service';


@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss']
})
export class ActivePostsComponent implements OnInit {

  // definizione posts
  posts!: Post[];

  constructor( private postsSrv: PostsService ) { } // inserimento postsSrv come parametro costruttore

  ngOnInit(): void {
    // definizione metodo del COMPONENT di recupero dei posts con invocazione metodo del SERVICE
    this.posts = this.postsSrv.recuperaPosts()
  }

  // metodo COMPONENT per modifica proprietà "active" oggetto post invocando metodo SERVICE
  disattivaPost(_id:number, _arrayIndex:number) {
    this.postsSrv.aggiornaPost({ active: false }, _id);
    this.posts.splice(_arrayIndex, 1)
  }

}
