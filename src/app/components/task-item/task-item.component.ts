import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit{
  @Input() task : Task | undefined;
  faTimes = faTimes;
  
  ngOnInit(): void {
    console.log("inside task-item ", this.task?.text);
  }
  

}
