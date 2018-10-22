import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaDialogDirective} from "./directives/ma-dialog.directive";
import {MaDialogComponent} from "./ma-dialog.component";
import {MaSharedModule} from "../ma-shared-module/ma-shared.module";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    MaSharedModule,
  ],
  declarations: [MaDialogComponent, MaDialogDirective]
})
export class MaDialogModule { }
