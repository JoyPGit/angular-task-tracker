import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { TASKS } from 'src/app/mockTasks';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  
  getTasks() : Observable<Task[]>{
    return of(TASKS);
  }
}
