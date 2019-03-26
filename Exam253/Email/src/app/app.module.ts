import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//service
import { TableServiceService } from "./services/table-service.service";
import { SortPipePipe } from './pipes/sort-pipe.pipe';
import { PhonePipe } from './pipes/phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SortPipePipe,
    PhonePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TableServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
