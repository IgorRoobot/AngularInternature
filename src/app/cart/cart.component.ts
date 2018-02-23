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
  carts: CartModel[] = [
    {id: 1, name: 'Name 1', status: false},
    {id: 2, name: 'Name 2', status: false},
    {id: 3, name: 'Name 3', status: false},
  ];
  
  constructor() { }

  ngOnInit() {
  }

  checkAll() {
    // let t = [];
    // this.carts.map( i => t.push(i));

    this.carts.map( elem => elem.status = this.flag);
    this.flag = !this.flag;

//    this.saveCarts = t;
  }

  loadData() {
  if (this.toggle) {
this.carts = JSON.parse(this.saveCarts);
      /*
        () =>  ....
        (x) =>  x+1
        (x) => { return console.log(x+1); }
      */
    //  for(let i=0; i < this.carts.length; i++) {
    //   for(let x=0; x< this.saveCarts.length; x++) {
    //    let temp = this.saveCarts[x].split('_');

    //     if (this.carts[i].id == temp[0]) {
    //       this.carts[i].status = temp[1];
    //     } else {
    //       this.carts[i].status = false;
    //     }
    //   }
    //  }

      // this.carts.map(i => {
      //   if (i.id == this.saveCarts[ this.saveCarts.length-1 ].id) {
      //     return i.status =  !this.saveCarts[ this.saveCarts.length-1 ].status;
      //   }
      //   else {
      //     return i.status = !i.status;
      //   }
      // });
      console.log('load data');
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
 
     this.saveCarts = JSON.stringify(this.carts).toString();
    // Array.prototype.push.apply(this.saveCarts, this.carts);
  //   console.log('saved',this.saveCarts);
  } 
}
