import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoomIn]'
})
export class ZoomInDirective {
  constructor(private elem: ElementRef) {

  }
  @HostListener('mouseover') onMouseOver() {

    this.elem.nativeElement.classList.add('zoom');

  }
  @HostListener('mouseleave') onMouseLeave() {

    this.elem.nativeElement.classList.remove('zoom');

  }



}
