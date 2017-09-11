import {Component, Input, Output,EventEmitter} from '@angular/core';
@Component({
selector:'app-user',
template:`
  <br>
  
  <!--<input type="text" (input)="onUserInput($event)" value="{{name}}">  Method 1 -->
  <!--<input type="text" [(ngModel)]="name"> Method 2 --> 
  <!--<input type="text" [(ngModel)]="name"> Method 3 -->


  <input type="text" (input)="onUserInput($event)" [value]="name"> 

  <p> Hello mr {{name}} from user Component</p> 
           <p> im the user component</p>
  <app-user-detail></app-user-detail>
`
})



export class UserComponent{
 // name='badrane';    Method 2
@Input() name;    //decorator @Input imported from input angular Core   Method 3 Method 4
@Output() nameChanged = new EventEmitter<string>();




  // onUserInput(event){                Method 1
  //   this.name=event.target.value;
  // }

  onUserInput(event){
      this.nameChanged.emit(event.target.value);

  }








}


