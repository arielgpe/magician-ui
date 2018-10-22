import {Directive, Input, TemplateRef} from '@angular/core';

@Directive({
  selector: '[maTemplate]'
})
export class MaTemplate {

  @Input() type: string;

  @Input('maTemplate') name: string;

  constructor(public template: TemplateRef<any>) {}

  getType(): string {
    return this.name;
  }

}


