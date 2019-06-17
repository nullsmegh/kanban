import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'client';
  stages = ["planning", "ongoning", "done"];
  project1 = ["pizza" , "poop", "shit", "duck"];
  project2 = ["kik" , "lol", "lulu", "duk"];

  constructor(public snackBar: MatSnackBar){

  }

  openSnackBar() {
    this.snackBar.open("sasadad", "sadsad", {
      duration: 2000,
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
