import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})

export class TabsComponent implements OnInit {
  characters=[
    {name:'Luke Skywalker',side:'light'},
    {name:'Luke Vader',side:''}
  ];

chosenList='all';


onChoose(char){

  this.chosenList=char;


}

  getCharacters() {

  if (this.chosenList === 'all') {
      return this.characters.slice();   // still don't get it
    }
    return this.characters.filter((char) => {
      return char.side === this.chosenList;
    })
  }

  onSideChosen(charInfo){

             console.log(charInfo);
            var pos=this.characters.findIndex((char)=>{
              return char.name === charInfo.name
            });


            this.characters[pos].side=charInfo.side;

  }






  constructor() { }

  ngOnInit() {
  }

}
