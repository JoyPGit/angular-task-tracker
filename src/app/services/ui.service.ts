import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask : boolean;
  public uiSubject : Subject<any>;  

  constructor(){
    this.showAddTask = false;
    this.uiSubject = new Subject<any>();
  }

  toggleAddTask(){
    this.showAddTask = !this.showAddTask;
    // subject.next 
    this.uiSubject.next(this.showAddTask);
  }

  public onToggle(){
    return this.uiSubject.asObservable();
  }
  
}
