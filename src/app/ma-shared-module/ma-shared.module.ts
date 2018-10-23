import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaTemplate } from './ma-template.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [MaTemplate],
  declarations: [MaTemplate]
})
export class MaSharedModule { }
