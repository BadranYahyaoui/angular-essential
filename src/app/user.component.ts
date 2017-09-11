import {Component, Input} from '@angular/core';
@Component({
selector:'app-user',
template:`
  <br>
  
  <!--<input type="text" (input)="onUserInput($event)" value="{{name}}">-->
  <input type="text" [(ngModel)]="name">
           <p> Hello mr {{name}} from user Component</p> 
           <p> im the user component</p>
`
})
export class UserComponent{
 // name='badrane';
@Input() name; //decorater @Input imported from input angular Core




  // onUserInput(event){
  //   this.name=event.target.value;
  // }
}


