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
  post: Post[] = [];

  constructor(private recuperaPostService: RecuperaPostService) {
    this.recuperaPostService.recuperaPost().then((data) => {this.post = data})
  }

  ngOnInit(): void {
  }

}
