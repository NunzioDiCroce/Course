import { Component, OnInit } from '@angular/core';

// TEMPLATE DRIVEN FORM ViewChild import
import { ViewChild } from '@angular/core';
// TEMPLATE DRIVEN FORM NgForm import
import { NgForm } from '@angular/forms';

// REACTIVE FORM imports
// MUST HAVE: FormBuilder, FormControl, FormGroup, Validators
// NICE HAVE: FormArray
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // definizione NgForm
  form!: NgForm;

  // definizione oggetto per gestire i dati nel form
  superHeroForm = {
    name: '',
    alterego: '',
    power: '',
    enemy: '',
    planet: '',
    weakness: ''
  }

  // definizione oggetto per gestire i dati ricevuti dal form
  superHero = {
    name: '',
    alterego: '',
    power: '',
    enemy: '',
    planet: '',
    weakness: ''
  }

  // definizione metodo creazione oggetto
  createHero() {
    this.superHero.name = this.superHeroForm.name;
    this.superHero.alterego = this.superHeroForm.alterego;
    this.superHero.power = this.superHeroForm.power;
    this.superHero.enemy = this.superHeroForm.enemy;
    this.superHero.planet = this.superHeroForm.planet;
    this.superHero.weakness = this.superHeroForm.weakness;
    console.log(this.superHero)
  }

}
