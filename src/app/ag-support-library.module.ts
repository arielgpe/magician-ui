import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AgSharedModule} from "./ag-shared-module/ag-shared.module";
import {AgDialogModule} from "./ag-dialog/ag-dialog.module";

@NgModule({
  imports: [
    CommonModule,
    AgSharedModule
  ],
  exports: [
    CommonModule,
    AgSharedModule,
    AgDialogModule,
  ]
})
export class AgSupportLibraryModule { }
