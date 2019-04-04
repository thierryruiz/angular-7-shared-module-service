import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  
  count = 0 ; 

  constructor() { }

  incValue(){
    this.count++;
  }

  getValue(){
    return this.count;
  }

}
