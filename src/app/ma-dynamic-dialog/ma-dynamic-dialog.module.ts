import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaDynamicDialogComponent} from "./ma-dynamic-dialog.component";
import {MaDialogModule} from "../ma-dialog/ma-dialog.module";
import {MaDialogService} from "./ma-dialog-service";

@NgModule({
  imports: [
    CommonModule,
    MaDialogModule,
  ],
  exports: [
    CommonModule,
    MaDialogModule,
    MaDynamicDialogComponent,
  ],
  providers: [MaDialogService],
  declarations: [MaDynamicDialogComponent]
})
export class MaDynamicDialogModule { }
