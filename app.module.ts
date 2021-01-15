import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NzTableModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent,NzTableModule]
})
export class AppModule { }
