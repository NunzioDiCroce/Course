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

  // definizione FormGroup
  form!: FormGroup;

  // definizione oggetto per gestire i dati ricevuti dal form
  superHero = {
    name: '',
    alterego: '',
    power: '',
    enemy: '',
    planet: '',
    weakness: ''
  }

  constructor(private builder: FormBuilder) { } // inserimento parametro FromBuilder

  ngOnInit(): void {

    this.form = this.builder.group({
      name: this.builder.control(null, [Validators.required]),
      alterego: this.builder.control(null, [Validators.required]),
      power: this.builder.control(null, [Validators.required]),
      enemy: this.builder.control(null, [Validators.required, Validators.maxLength(10)]),
      planet: this.builder.control(null, [Validators.required, Validators.minLength(5)]),

    })
  }

  createHero() {
  }

}
