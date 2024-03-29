import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() items = [];
  @Output() itemAdded = new EventEmitter<string>();
  newItem = '';

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    console.log(this.items);
    this.itemAdded.emit(this.newItem);
    this.newItem = '';
  }

}
