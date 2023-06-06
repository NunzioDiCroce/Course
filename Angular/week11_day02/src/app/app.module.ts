import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// TEMPLATE DRIVEN FORM FormsModule import
import { FormsModule } from '@angular/forms';

// REACTIVE FORM ReactiveFormsModule import
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
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
