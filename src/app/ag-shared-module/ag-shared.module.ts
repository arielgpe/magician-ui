import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgTemplate } from './ag-template.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [AgTemplate],
  declarations: [AgTemplate]
})
export class AgSharedModule { }
