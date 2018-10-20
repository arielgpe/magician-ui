import {Directive, Input, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[agSimpleDialog]'
})
export class AgSimpleDialogDirective {

  constructor(private viewContainer: ViewContainerRef) {

  }

  @Input() set agSimpleDialog(visible: boolean){
    const me = this;
    // Get the modal
    let modal = me.viewContainer.element;

    if (visible){
      modal.nativeElement.style.display = "block";
    } else {
      modal.nativeElement.style.display = "none";
    }
  }

}
