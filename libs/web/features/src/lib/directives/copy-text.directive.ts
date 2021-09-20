import { Directive, HostListener, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { copyTextToClipboard } from '@pb/xplat/utils';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { MetrikaService } from '@pb/xplat/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[copyText]'
})
export class CopyTextDirective {
  @Input('copyText') selector: string; // selector
  @Input() text: string;
  @Input() fireEvent: string; // metrika event name

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private snackbar: MatSnackBar,
    private translateService: TranslateService,
    private metrika: MetrikaService
  ) { }

  @HostListener('click')
  onClick(): void {
    let text = this.text;

    const el = this.selector ? this.document.querySelector(this.selector) : null;
    if (!this.text && !el) {
      return;
    }
    if (el && !this.text) {
      text = el.textContent;
    }
    copyTextToClipboard(text);
    this.snackbar.open(this.translateService.instant('SUCCESS.COPY_SUCCESS'), 'Закрыть');
    if (this.fireEvent) {
      this.metrika.fireEvent(this.fireEvent);
    }
  }

}
