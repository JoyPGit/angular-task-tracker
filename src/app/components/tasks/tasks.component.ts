import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TASKS } from 'src/app/mockTasks';
import { TaskService } from '../../services/task.service'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{
  public tasks:Task[] = TASKS;
  public taskService;
  constructor(taskService : TaskService){
    this.taskService = taskService;
  }

  ngOnInit(): void {
    // this.tasks = this.taskService.getTasks(); // for normal json
    // for observables need to subscribe
    this.taskService.getTasks().subscribe(
      (tasks) => tasks);
  }

}
