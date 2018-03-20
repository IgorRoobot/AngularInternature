import { Component, OnInit } from '@angular/core';
import { GoogleServiceService } from '../google-service.service';
import { Subject } from 'rxjs/Subject';

import { Subscription } from 'rxjs/Subscription';
 
import { MessageService } from '../test.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

  message: any;
  subscription;

  myPrint: any[];
  oM: Observable<any>;

  constructor(private messageService: GoogleServiceService, private otherService: MessageService) { 
    
  this.otherService.getMessage()
  .subscribe(message => { 
 //   console.log(this.isLengthBigerFive(message));
    console.log(message);
    if(typeof message.text == 'number'){
    console.log('I found the number');
    }
      return this.message = message; 
    }
  );


  }

  ngOnInit() {
//  /   this.otherService.sendMessage('aaaa' );
    this.oM = this.otherService.getBoroda();
    
    this.myPrint = this.messageService.getMessage();

    this.myPrint.map(item => { 
      if(typeof item.txt == 'number'){
        console.log("AAAAAAAA");
      }
      return item;
    });
    console.log(this.subscription);
    console.log(this.message);

    // this.myPrint.push({id:5,txt:5555});
  }

  isLengthBigerFive(str){
    const mystring = new String(str);
    if (mystring.length > 5){
      return true;
    }
    else{
      return false;
    }
  }

}
