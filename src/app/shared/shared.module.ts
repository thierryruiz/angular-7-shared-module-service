import { NgModule, ModuleWithProviders } from '@angular/core';
import { CounterService } from './counter.service';

@NgModule({})
export class SharedModule {
  // share service singleton between modules
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [CounterService]
    };
  }
}
