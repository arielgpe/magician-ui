import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AgSharedModule} from "./ag-shared-module/ag-shared.module";
import {AgSimpleDialogModule} from "./ag-simple-dialog/ag-simple-dialog.module";

@NgModule({
  imports: [
    CommonModule,
    AgSharedModule
  ],
  exports: [
    CommonModule,
    AgSharedModule,
    AgSimpleDialogModule,
  ]
})
export class AgSupportLibraryModule { }
