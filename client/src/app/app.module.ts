import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatRippleModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatSnackBarModule,
    MatRippleModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
