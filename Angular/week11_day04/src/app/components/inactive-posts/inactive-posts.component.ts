import { Component, OnInit } from '@angular/core';

// interface import
import { Post } from 'src/app/models/post.interface';

// service import
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent implements OnInit {

  // definizione posts
  posts!: Post[];

  constructor( private postsSrv: PostsService ) { }

  ngOnInit(): void {

    // definizione metodo del COMPONENT di recupero dei posts con invocazione metodo del SERVICE
    this.posts = this.postsSrv.recuperaPosts()
  }

  // metodo COMPONENT per modifica proprietà "active" oggetto post invocando metodo SERVICE
  disattivaPost(_id:number, _arrayIndex:number) {
    this.postsSrv.aggiornaPost({ active: true }, _id);
    this.posts.splice(_arrayIndex, 1)
  }

}
