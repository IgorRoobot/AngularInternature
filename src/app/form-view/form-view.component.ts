import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { CartModel } from '../cartModel';
import { carts } from '../form_data_db';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.css']
})
export class FormViewComponent implements OnInit {

  formData: CartModel;
  carts = carts;
  

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(par => this.formData = this.carts.filter(el => el.id.toString() == par.id)[0] );
    console.log(this.formData);
  }

  ngOnInit() {
   // this.formData = this.carts.filter(el => el.id = par.id) 
  }

}
