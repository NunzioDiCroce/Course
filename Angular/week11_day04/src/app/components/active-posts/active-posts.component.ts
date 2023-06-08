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

  constructor( postsSrv: PostsService ) { } // inserimento postsSrv come parametro costruttore

  ngOnInit(): void {

  }

}
