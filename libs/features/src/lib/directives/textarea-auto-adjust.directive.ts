import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Directive({
  selector: '[heightAdjust]'
})
export class TextareaHeightAdjustDirective implements OnInit {
  @Input('maxHeight') maxHeight = 300;
  constructor(
    private readonly el: ElementRef,
    private readonly eventManager: EventManager
  ) { }

  ngOnInit(): void {
    this.eventManager.getZone().runOutsideAngular(() => {
      this.eventManager.addEventListener(this.el.nativeElement, 'keyup', () => {
        const element = this.el.nativeElement;
        element.style.height = "1px";
        element.style.height = (25 + element.scrollHeight) + "px";
        element.style.maxHeight = `${this.maxHeight}px`
      })
    });
  }

}