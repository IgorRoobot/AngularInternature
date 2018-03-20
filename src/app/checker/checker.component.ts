import { Component, OnInit, Input, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { CartModel } from '../cartModel'

@Component({
  selector: 'app-checker',
  templateUrl: './checker.component.html',
  styleUrls: ['./checker.component.css']
})
export class CheckerComponent implements OnInit {
  greenBtn: Boolean;

  @Input() cart: CartModel;
  @Output() idEvent = new EventEmitter<any>(); 

  constructor() { }

  ngOnInit() {
  }

  itemId(item){
    this.cart.status = !this.cart.status;

    this.idEvent.emit({
      status:this.cart.status,
      item:item
      });
  }

  divGreen(){
    if(this.cart.status){
      this.greenBtn = true;
    }
  }
}
