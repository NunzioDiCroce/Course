import { Component, OnInit } from '@angular/core';

// importo INTERFACE nel ts del COMPONENT
import { Post } from '../models/post.interface';

// importo SERVICE nel ts del COMPONENT
import { RecuperaPostService } from '../services/recupera-post.service';


@Component({
  selector: 'app-post-non-attivi',
  templateUrl: './post-non-attivi.component.html',
  styleUrls: ['./post-non-attivi.component.scss']
})
export class PostNonAttiviComponent implements OnInit {

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

  //metodo per attivare l'istanza
  attiva(_id:number) {
    for (let i = 0; i < this.posts.length; i++) {
      if (this.posts[i].id === _id) {
        this.posts[i].active = true
      }
    }
  }

}
