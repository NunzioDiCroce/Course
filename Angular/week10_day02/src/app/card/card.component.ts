// aggiungo Input per gestire card.component come CHILD di post-attivi/-non-attivi.component
import { Component, OnInit, Input } from '@angular/core';

// importo INTERFACE nel ts del COMPONENT
import { Post } from '../models/post.interface';

// NON SERVE importare il SERVICE in questo COMPONENT
/*import { RecuperaPostService } from '../services/recupera-post.service';*/

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {

  //
  @Input() postFromParent!: Post;

  constructor() {} // non serve "toccare" il constructor

  ngOnInit(): void {
  }
}
