import { Component, OnInit } from '@angular/core';

// REACTIVE FORM imports
// MUST HAVE: FormBuilder, FormControl, FormGroup, Validators
// NICE HAVE: FormArray
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  // dichiarazione FormGroup
  form!: FormGroup;

  constructor(private builder: FormBuilder) { } // inserimento parametro FromBuilder

  ngOnInit(): void {

    this.form = this.builder.group({

    })
  }

}
