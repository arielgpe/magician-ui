import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AgSupportLibraryModule} from "./ag-support-library.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgSupportLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
