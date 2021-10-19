import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[heightAdjust]'
})
export class TextareaHeightAdjustDirective {
  @Input('maxHeight') maxHeight = 300;
  constructor(
    private el: ElementRef
  ) { }

  @HostListener('keyup', ['$event']) onKeyUp(e: any): void {
    const element = this.el.nativeElement;
    element.style.height = "1px";
    element.style.height = (25 + element.scrollHeight) + "px";
    element.style.maxHeight = `${this.maxHeight}px`
  }

}