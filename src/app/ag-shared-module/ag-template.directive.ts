import {Directive, Input, TemplateRef} from '@angular/core';

@Directive({
  selector: '[agTemplate]'
})
export class AgTemplate {

  @Input() type: string;

  @Input('agTemplate') name: string;

  constructor(public template: TemplateRef<any>) {}

  getType(): string {
    return this.name;
  }

}


