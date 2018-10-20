import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AgSimpleDialogDirective} from "./directives/ag-simple-dialog.directive";
import {AgDialogComponent} from "./ag-dialog.component";
import {AgSharedModule} from "../ag-shared-module/ag-shared.module";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    AgSharedModule,
    AgDialogComponent,
    AgSimpleDialogDirective
  ],
  declarations: [AgDialogComponent, AgSimpleDialogDirective]
})
export class AgDialogModule { }
