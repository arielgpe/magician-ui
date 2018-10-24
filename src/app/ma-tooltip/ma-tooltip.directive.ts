import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[maTooltip]'
})
export class MaTooltipDirective {

  @Input() maTooltipText: string;

  constructor(private el: ElementRef) {
  }

  @HostListener("mouseenter") onMouseEnter(){
    let element = this.el.nativeElement;
    let pTag = document.createElement(`p`);
    pTag.classList.add("ma-tooltip");
    this.addNormalProperties(pTag);
    pTag.appendChild(document.createTextNode(this.maTooltipText))
    element.appendChild(pTag);
  }

  @HostListener("mouseleave") onMouseLeave(){
    let tooltips = this.el.nativeElement.getElementsByClassName("ma-tooltip")
    for (let i = 0; i < tooltips.length; i++) {
      const tooltip = tooltips[i];
      this.el.nativeElement.removeChild(tooltip)

    }
  }

  addNormalProperties(el: any){
    el.style.position = "absolute";
    el.style.backgroundColor = "#646464";
    el.style.borderRadius = "4px";
    el.style.padding = "6px 12px";
    el.style.fontSize = "12px";
    el.style.textShadow = "0px 1px 1px #000";
    el.style.color = "#ffc64a";
  }
}

