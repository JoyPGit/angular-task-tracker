import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

export class AddTaskComponent implements OnInit{
  // 2-way data binding
  text :string;
  dayTime : string;
  reminder :boolean;
  @Output() emitNewTask : EventEmitter<Task>;
  showAddTask : boolean;
  uiService: UiService;
  subscription : Subscription;

  constructor(service: UiService){
    this.emitNewTask = new EventEmitter();
    this.text = "";
    this.dayTime = "";
    this.reminder = false;
    this.showAddTask = false;
    this.uiService = service;
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddTask = value);
  }
  ngOnInit(): void {
  }
  
  onSubmit(){
    if(!this.text) alert("Please add a text");
    if(!this.dayTime) alert("Please add a day and time");

    const newTask : Task = {
      text : this.text,
      day : this.dayTime,
      reminder : this.reminder
    }

    // emit event to call service from parent component
    this.emitNewTask.emit(newTask);

    // set to default values after the task is created
    this.text = "";
    this.dayTime = "";
    this.reminder =false;
  }
}
