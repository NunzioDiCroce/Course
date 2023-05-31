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
    // SOLUZIONE ABBANDONATA
    /*this.recuperaPostService.recuperaPost().then((data) => {this.posts = data})*/
   }

  ngOnInit(): void {
    // modifico OnInit per recuperare i post utilizzando il SERIVICE
    this.posts = this.recuperaPostService.recuperaPost()
  }

  //metodo per disattivare l'istanza
  disattiva(_id:number) {
    for (let i = 0; i < this.posts.length; i++) {
      if (this.posts[i].id === _id) {
        this.posts[i].active = false
      }
    }
  }

}
