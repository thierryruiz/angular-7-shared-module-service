import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EagerComponent } from './eager.component';
import { routing } from './app.routing';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports:      [ 
    BrowserModule, 
    routing, 
    SharedModule.forRoot() 
  ],
  declarations: [ AppComponent, EagerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
