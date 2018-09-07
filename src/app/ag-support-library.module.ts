import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgSimpleDialogComponent } from './ag-simple-dialog/ag-simple-dialog.component';
import { AgSimpleDialogDirective } from './ag-simple-dialog/ag-simple-dialog.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    AgSimpleDialogComponent
  ],
  declarations: [AgSimpleDialogComponent, AgSimpleDialogDirective]
})
export class AgSupportLibraryModule { }
