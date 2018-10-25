import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[maTooltip]'
})
export class MaTooltipDirective {

  pTag: any;

  constructor(private el: ElementRef) {
    el.nativeElement.classList.add("ma-tooltip");
    this.pTag = document.createElement(`span`);
    this.pTag.classList.add("ma-tooltip-text");
  }

  @Input() set maTooltipText (text: string){
    this.pTag.appendChild(document.createTextNode(text));
    this.el.nativeElement.appendChild(this.pTag);
  }

  @Input() set maTooltipPosition(position: string){
    switch (position) {
      case "right":
        this.pTag.classList.add("ma-tooltip-right");
        break;
      case  "bottom":
        this.pTag.classList.add("ma-tooltip-bottom");
        break;
      case "left":
        this.pTag.classList.add("ma-tooltip-left");
        break;
      case "top":
        this.pTag.classList.add("ma-tooltip-top");
        break;
      default:
        this.pTag.classList.add("ma-tooltip-right");
        break


    }
  }
  @HostListener("mouseenter") onMouseEnter(){
    let element = this.el.nativeElement;
    this.pTag.style.visibility = "visible"
  }

  @HostListener("mouseleave") onMouseLeave(){
    let tooltips = this.el.nativeElement.getElementsByClassName("ma-tooltip-text")
    for (let i = 0; i < tooltips.length; i++) {
      let tooltip = tooltips[i];
      tooltip.style.visibility = "hidden"
    }
  }
}

