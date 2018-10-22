import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaDynamicDialogComponent} from "./ma-dynamic-dialog.component";
import {MaSharedModule} from "../ma-shared-module/ma-shared.module";
import {MaDialogModule} from "../ma-dialog/ma-dialog.module";

@NgModule({
  imports: [
    CommonModule,
    MaDialogModule,
  ],
  exports: [
    CommonModule,
    MaSharedModule,
    MaDialogModule
  ],
  declarations: [MaDynamicDialogComponent]
})
export class MaDynamicDialogModule { }
