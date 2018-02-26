import { Component, OnInit } from '@angular/core';

import { CartModel } from '../cartModel';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  flag = true;
  toggle = true;

  saveCarts = '';
  saveCartsArray = [];
  carts: CartModel[] = [
    {id: 1, name: 'Name 1', status: false},
    {id: 2, name: 'Name 2', status: false},
    {id: 3, name: 'Name 3', status: false},
  ];
  
  constructor() { }

  ngOnInit() {
  }

  checkAll() {
    this.saveCartsArray = this.carts;
    console.log (this.carts);
    console.log (this.saveCartsArray);
    this.carts.map( elem => elem.status = this.flag);
    this.flag = !this.flag;
  }

  loadData() {
  if (this.toggle) {
    // this.carts = JSON.parse(this.saveCarts);
      this.saveCartsArray = this.carts;
      console.log('load data');
      console.log (this.saveCartsArray);
  }
    this.toggle = !this.toggle;
    // console.log(this.saveCarts);
    // this.carts = [];
    // this.carts = this.saveCarts;
    // console.log(this.carts);
  }

  receiveMessage($event) {
    let id = $event.item.id;
    // console.log(id);
    this.carts.map(function(id) {
      if (id) {
          return status = $event.status;
        }
    });
 
    // this.saveCarts = JSON.stringify(this.carts).toString();
    // this.saveCartsArray = this.carts;
    // console.log (this.carts);
    // console.log (this.saveCartsArray);
  } 
}
