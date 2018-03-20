import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

export interface comData{
  id:number,
  txt: any
}

@Injectable()
export class GoogleServiceService {

  messages: comData[] = [{id:1, txt:'hello'}, {id:2, txt:'sdasds'}];

  constructor() { }
  
  getMessage(){
    return this.messages;
  }

  addMessage(s){
    this.messages.push(s);
  }
}
