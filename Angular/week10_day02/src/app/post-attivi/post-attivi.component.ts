import { Component, OnInit } from '@angular/core';

// importo INTERFACE nel ts del COMPONENT
import { Post } from '../models/post.interface';

// importo SERVICE nel ts del COMPONENT
import { RecuperaPostService } from '../services/recupera-post.service';

@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrls: ['./post-attivi.component.scss']
})
export class PostAttiviComponent implements OnInit {

  // definizione array come da INTERFACE importata
  posts: Post[] = [];

  constructor(private recuperaPostService: RecuperaPostService) {
    this.recuperaPostService.recuperaPost().then((data) => {this.posts = data})
   }

  ngOnInit(): void {
  }

}
