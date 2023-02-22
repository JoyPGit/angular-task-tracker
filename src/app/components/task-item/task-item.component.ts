import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit{
  @Input() task : Task | undefined;
  @Output() onDeleteTask : EventEmitter<Task>;
  @Output() onToggleReminder : EventEmitter<Task>;

  faTimes = faTimes;

  constructor(){
    this.onDeleteTask = new EventEmitter();
    this.onToggleReminder = new EventEmitter()
  }
  
  ngOnInit(): void {
    console.log("inside task-item ", this.task?.text);
  }
  
  // using task : Task throws error, use any or  (| undefined) in case undefined
  public onDelete(task: any){ 
    console.log("delete in task-item", task);
    this.onDeleteTask.emit(task);
  }

  public onToggle(task : Task|undefined){
    this.onToggleReminder.emit(task);
  }

}
