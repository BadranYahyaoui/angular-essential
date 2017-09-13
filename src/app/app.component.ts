import { Component } from '@angular/core';
// import "lodash M1"
import {random}from "lodash"
// declare var _:any; M1
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {
  title = 'Badran \'s First ';
// Declare some methods and proprieties
  rootName='BadranAppComponent:D'

  number=0;




  rootItems = ['Apples', 'Bananas', 'Cherries'];


  OnNameChanged(newName){
    this.rootName=newName
  }

onIncrease(){
    // this.number=this.number*2;
    // this.number=_.random(1,10); M1
    this.number=random(1,10);
}
  onItemWasAdded(newItem) {
    this.rootItems.push(newItem);
    // console.log(this.rootItems);
  }



}
