import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AgSimpleDialogDirective} from "./directives/ag-simple-dialog.directive";
import {AgSimpleDialogComponent} from "./ag-simple-dialog.component";
import {AgSharedModule} from "../ag-shared-module/ag-shared.module";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    AgSharedModule,
    AgSimpleDialogComponent,
    AgSimpleDialogDirective
  ],
  declarations: [AgSimpleDialogComponent, AgSimpleDialogDirective]
})
export class AgSimpleDialogModule { }
