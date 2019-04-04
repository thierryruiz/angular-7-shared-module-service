import { NgModule } from '@angular/core';
import { LazyComponent } from './lazy.component';
import { routing } from './lazy.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations :[LazyComponent],
  imports: [
    routing,
    SharedModule,
  ]
})
export class LazyModule { }