import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {MaSupportLibraryModule} from "./ma-support-library.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaSupportLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
