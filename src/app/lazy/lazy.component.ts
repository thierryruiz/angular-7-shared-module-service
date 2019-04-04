import { Component, OnInit } from '@angular/core';
import { CounterService } from '../shared/counter.service';

@Component({
  selector: 'lazy',
  templateUrl: './lazy.component.html',
  styles: [`
    p { font-family: Lato; border: 1px solid grey;padding :20px }`
  ]
})
export class LazyComponent implements OnInit {

  constructor( private counterService: CounterService ) { }

  ngOnInit() {
  }

  counterValue() {
    return this.counterService.getValue() ;
  }

  incValue(){
    this.counterService.incValue();
  }

}