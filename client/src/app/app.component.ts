import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  stages = [{
    title: "Planning",
    data: [{
      task: "Task 1 - Planning",
      metaData: "Low Priority"
    },{
      task: "Task 2 - Planning",
      metaData: "Low Priority"
    },{
      task: "Task 3 - Planning",
      metaData: "Low Priority"
    },{
      task: "Task 4 - Planning",
      metaData: "Low Priority"
    }]
  }, {
    title: "Ongoing",
    data: [{
      task: "Task 1 - Ongoing",
      metaData: "Low Priority"
    },{
      task: "Task 2 - Ongoing",
      metaData: "Low Priority"
    },{
      task: "Task 3 - Ongoing",
      metaData: "Low Priority"
    },{
      task: "Task 4 - Ongoing",
      metaData: "Low Priority"
    }]
  }, {
    title: "Completed",
    data: [{
      task: "Task 1 - Completed",
      metaData: "Low Priority"
    },{
      task: "Task 2 - Completed",
      metaData: "Low Priority"
    },{
      task: "Task 3 - Completed",
      metaData: "Low Priority"
    },{
      task: "Task 4 - Completed",
      metaData: "Low Priority"
    }]
  }];

  taskTitle: string = "";
  taskMetaData: string = "";
  stageTitle: string = "";

  constructor(public snackBar: MatSnackBar){

  }

  addJob(index,title,meta){
    if(!title.innerHTML) {
      this.emptyFieldError();
    } else {
      this.stages[index].data.unshift({task: title.innerHTML, metaData: meta.innerHTML || "Tag"});
      this.openSnackBar();
    }

    title.innerHTML = "";
    meta.innerHTML  = "";

    return;
  }

  addStage(title){
    if(!title){
      this.emptyFieldError();
    } else {
      this.stages.push({
      title: title.innerHTML,
      data: []
      });
    }
    title.innerHTML = "";
    return;
  }

  openSnackBar() {
    this.snackBar.open("Added", "OK", {
      duration: 2000,
    });
  }

  emptyFieldError(){
    this.snackBar.open("Please fill required fields.", "Error", {
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
