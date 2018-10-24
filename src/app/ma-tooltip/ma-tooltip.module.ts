import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaTooltipDirective } from './ma-tooltip.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [MaTooltipDirective],
  declarations: [MaTooltipDirective]
})
export class MaTooltipModule { }
