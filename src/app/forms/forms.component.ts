import { Component, OnInit } from '@angular/core';

import { FormModel } from '../formModel';
import { carts } from '../form_data_db';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  
  carts = carts;

  options = ['AQA', 'Designer', 'Developer', 'QA Manual', 'Menager'];

  model = new FormModel('Ihor', 'ihor@gmail.com', 1234567890, 'Hello world!', this.options[2]);
  
  submitted = false;

  onSubmit(){
    console.log(this.model.name);
    this.carts.push(
      {
        id: this.carts.length+1,
        name: this.model.name, 
        status: false
      }
    )
    console.log(this.carts);
    this.submitted = true;
  }

  constructor() { }

  ngOnInit() {
  }


  addCart(){
    // this.carts = new FormModel('asd', 'asd', 123, 'asd', this.options[4]);
    // console.log("ok");
  }

}
