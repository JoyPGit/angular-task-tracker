import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  title : string;
  showAddTask : boolean;
  uiService : UiService;
  subscription : Subscription;

  constructor(service : UiService){
    this.title = "Task Tracker";
    this.uiService = service;

    this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddTask = value);
    this.showAddTask = false;
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  /**
   * service's toggleAddtask method is called, which changes value of boolean var 
   * in service and that value is pcked up via the subscription in constrcutor
   * subject.next() and subscribe
   */
  public toggleTask(){
    console.log("toggle");
    this.uiService.toggleAddTask();
  }
}
