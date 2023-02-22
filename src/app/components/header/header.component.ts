import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Router } from '@angular/router';

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
  router : Router;

  constructor(service : UiService, router : Router){
    this.title = "Task Tracker";
    this.uiService = service;

    this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddTask = value);
    this.showAddTask = false;

    this.router = router;
    console.log("header route :", this.router.url);

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

  hasRoute(route : string){
    return this.router.url == route; 
  }
}
