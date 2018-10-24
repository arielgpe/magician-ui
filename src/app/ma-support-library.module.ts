import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaSharedModule} from "./ma-shared-module/ma-shared.module";
import {MaDialogModule} from "./ma-dialog/ma-dialog.module";
import {MaDynamicDialogModule} from "./ma-dynamic-dialog/ma-dynamic-dialog.module";
import {MaTooltipModule} from "./ma-tooltip/ma-tooltip.module";

@NgModule({
  imports: [
    CommonModule,
    MaSharedModule,
    MaTooltipModule
  ],
  exports: [
    CommonModule,
    MaSharedModule,
    MaDialogModule,
    MaDynamicDialogModule,
    MaTooltipModule
  ]
})
export class MaSupportLibraryModule { }
