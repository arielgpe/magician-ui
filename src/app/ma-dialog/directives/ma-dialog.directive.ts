import {Directive, Input, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[maSimpleDialog]'
})
export class MaDialogDirective {

  constructor(private viewContainer: ViewContainerRef) {

  }

  @Input() set maSimpleDialog(visible: boolean){
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
