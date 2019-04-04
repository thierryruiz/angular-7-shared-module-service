import { Component, Input } from '@angular/core';
import { CounterService } from './shared/counter.service';

@Component({
  selector: 'eager',
  templateUrl : './eager.component.html' ,
  styles: [`
    p { font-family: Lato; border: 1px solid grey;padding :20px }`
  ]
})
export class EagerComponent  {
  
  @Input() name: string;

  constructor( private counterService: CounterService ) { }

  ngOnInit() {
  }

  counterValue() {
    return this.counterService.getValue() ;
  }

  incValue(){
    this.counterService.incValue() ;
  }

}
