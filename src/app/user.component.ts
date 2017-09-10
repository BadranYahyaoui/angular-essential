import {Component} from '@angular/core';
@Component({
selector:'app-user',
template:`
  <br>
  
  <input type="text" (input)="onUserInput($event)" value="{{name}}">
           <p> Hello mr {{name}} from user Component</p> 
           <p> im the user component</p>
`
})
export class UserComponent{
 name='badran';
  onUserInput(event){
    this.name=event.target.value;
  }
}


