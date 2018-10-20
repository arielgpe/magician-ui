import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AgSimpleDialogModule} from "./ag-simple-dialog/ag-simple-dialog.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgSimpleDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
