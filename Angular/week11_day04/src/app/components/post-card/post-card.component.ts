import { Component, OnInit } from '@angular/core';

// import of INPUT DECORATOR
// @Input() and @Output() give a child component a way to communicate with its parent component. @Input() lets a parent component update data in the child component. Conversely, @Output() lets the child send data to a parent component.
import { Input } from '@angular/core';

// interface import
import { Post } from 'src/app/models/post.interface';


@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  // @Input() and @Output() give a child component a way to communicate with its parent component. @Input() lets a parent component update data in the child component. Conversely, @Output() lets the child send data to a parent component.
  @Input() postInviato!: Post

  constructor() { }

  ngOnInit(): void {
  }

}
