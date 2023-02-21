import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit{
  @Input() text: string | undefined;
  @Input() color : string | undefined;
  @Output() btnClick = new EventEmitter();

  constructor(){}

  ngOnInit(): void {
    console.log(this.text);
    console.log(this.color);
    // throw new Error('Method not implemented.');
  }
  
  public onClick():void{
    console.log(this.text);
    this.btnClick.emit();
  }

}
