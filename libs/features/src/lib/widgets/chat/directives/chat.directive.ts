import { AfterViewChecked, AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { EventManager } from '@angular/platform-browser';


@Directive({
  selector: '[handleChatScroll]'
})
export class ChatDirective implements OnInit, AfterViewInit {
  @Input() isLoading = false;
  @Input() target!: string;
  @Output() loadHistory = new EventEmitter();

  firstLoad = true;


  constructor(
    private readonly el: ElementRef,
    private readonly eventManager: EventManager
  ) { }

  ngOnInit(): void {
    this.eventManager.getZone().runOutsideAngular(() => {
      this.eventManager.addEventListener(this.el.nativeElement, 'scroll', (e: any) => {
        const target = e.target as HTMLElement;
        const scrollTop = target.scrollTop;
        if (scrollTop === 0) {
          this.eventManager.getZone().run(() => {

            if (!this.isLoading) {
              this.loadHistory.emit();
            }
          })

        }
      });

      this.eventManager.addEventListener(this.el.nativeElement, 'click', (e: any) => {
        const target = document.querySelector(this.target);
        if (target) {
          target.scrollTop = target.scrollHeight + 1000;
        }
      });
    })
  }

  ngAfterViewInit(): void {

    if (!this.target) {
      setTimeout(() => {
        this.firstLoad = false;
        const target = this.el.nativeElement as HTMLElement;
        const firstUnreadMessageElement = target.querySelector('.__unreassd') as HTMLElement;
        if (firstUnreadMessageElement) {
          this.scrollToTarget(firstUnreadMessageElement);
        } else {
          target.scrollTop = target.scrollHeight;
        }
      }, 100)
    }
  }


  private scrollToTarget(target: HTMLElement): void {
    if (!target) {
      return;
    }
    this.eventManager.getZone().runOutsideAngular(() => {
      const parentTarget = this.el.nativeElement as HTMLElement;
      const parentTopPos = parentTarget.offsetTop;

      const offsetTop = target.offsetTop;


      parentTarget.scrollTo({
        top: offsetTop - parentTopPos
      });
    });
  }

}