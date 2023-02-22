import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { TASKS } from 'src/app/mockTasks';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type' :'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private url  = "http://localhost:5000/tasks";
  private httpClient : HttpClient;

  constructor( httpClient :  HttpClient) { 
    this.httpClient  = httpClient;
  }
  
  getTasks() : Observable<Task[]>{
    return this.httpClient.get<Task[]>(this.url);
    // return of(TASKS);
  }

  deleteTask(task: Task) : Observable<Task>{
    const url = `${this.url}/${task.id}`;
    return this.httpClient.delete<Task>(url);
  }

  //takes body as 2nd param
  udpateTaskReminder(task: Task) : Observable<Task>{
    const url = `${this.url}/${task.id}`;
    return this.httpClient.put<Task>(url, task);
  }
}
