import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// TEMPLATE DRIVEN FORM FormsModule import
import { FormsModule } from '@angular/forms';

// REACTIVE FORM ReactiveFormsModule import
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';
import { ReactiveComponent } from './components/reactive/reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    ReactiveComponent
  ],
  imports: [
    BrowserModule,

    // TEMPLATE DRIVEN FORM FormsModule import
    FormsModule,

    // REACTIVE FORM ReactiveFormsModule import
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
