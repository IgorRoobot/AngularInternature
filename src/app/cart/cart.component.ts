import { Component, OnInit, ViewChild, ViewChildren,  } from '@angular/core';

import {CheckerComponent} from './../checker/checker.component';
import { CartModel } from '../cartModel';
import { carts } from '../form_data_db';
import { GoogleServiceService } from '../google-service.service'
import { MessageService }  from '../test.service';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  flag = true;
  toggle = true;
  mystr: any[];
  oMessage: Observable<any>;

  @ViewChildren(CheckerComponent) child; 
  
  carts = carts;
  
  saveCarts = '';
  saveCartsArray = [];
  // carts: CartModel[] = [
  //   {id: 1, name: 'Name 1', status: false},
  //   {id: 2, name: 'Name 2', status: false},
  //   {id: 3, name: 'Name 3', status: false},
  // ];
  
  constructor(private messageService: GoogleServiceService,private otherService: MessageService) { }

  ngOnInit() {
    this.mystr=this.messageService.getMessage();
    this.oMessage = this.otherService.getMessage();
    
  }

  checkAll() {
 
    for (var i = 0; i < this.carts.length; i++) this.saveCartsArray[i] = this.carts[i];
    // this.saveCartsArray = this.carts;
    console.log (this.carts);
    console.log (this.saveCartsArray);
    this.carts.map( elem => elem.status = this.flag);
    this.flag = !this.flag;
  }

  loadData() {
  if (this.toggle) {
    this.carts = JSON.parse(this.saveCarts);
      this.saveCartsArray = this.carts;
      console.log('load data');
      console.log (this.saveCartsArray);
  }
    this.toggle = !this.toggle;
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
    this.saveCartsArray = this.carts;
    console.log (this.carts);
    console.log (this.saveCartsArray);
  }

  makeItGreen(){
      this.child.map( i => i.divGreen() );
  }

  addToService(str){
   //this.messageService.addMessage({id:3,txt:3333});
    this.otherService.sendMessage(333 );
  }

  addnew(){
    this.otherService.sendMessage(555);
  }
}
