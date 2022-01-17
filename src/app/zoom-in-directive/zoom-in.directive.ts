import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoomIn]'
})
export class ZoomInDirective {
  constructor(private elem: ElementRef) {

  }
  @HostListener('mouseover') onMouseOver() {

    this.elem.nativeElement.classList.add('zoom');
    console.log("entered");
  }
  @HostListener('mouseleave') onMouseLeave() {

    this.elem.nativeElement.classList.remove('zoom');
    console.log("left");
    console.log(this.elem.nativeElement)
  }



}
