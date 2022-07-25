import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Items } from 'src/app/interfaces/items';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

/*  will receive Item from Parenta as Input  */
@Input('item')item:Items;

/* will send amount and Item object in one object to Parent component  as OutPut */
@Output('setItem')setItem = new EventEmitter;

amount :number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  /* when the Customer Trigger function Add to card  will emit the Event andpass the data */
  addToCart(){
  this.setItem.emit({...this.item,amount:this.amount})
  }

  alertChange(){
    alert('you edit the amount')
  }

}
