import { Component } from '@angular/core';

// TEMPLATE DRIVEN FORM ViewChild import
import { ViewChild } from '@angular/core';
// TEMPLATE DRIVEN FORM NgForm import
import { NgForm } from '@angular/forms';

// REACTIVE FORM imports
// MUST HAVE: FormBuilder, FormControl, FormGroup, Validators
// NICE HAVE: FormArray
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'week11_day02';
}
