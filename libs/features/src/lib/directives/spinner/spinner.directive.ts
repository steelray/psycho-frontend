import { ComponentFactoryResolver, Directive, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { SpinnerComponent } from './spinner.component';
import { NgxSpinnerService, Size } from 'ngx-spinner';
import { SPINNER_TYPE } from './spinner-types.enum';

// This directive places an overlay with a loading spinner over its host element
// if isLoading equals to true and hides the overlay when isLoading becomes false.
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[spinner]'
})
export class SpinnerDirective implements OnInit, OnChanges {
  @Input('spinner') isLoading!: boolean;
  @Input('spinnerType') type: SPINNER_TYPE = SPINNER_TYPE.BALL_FUSSION;
  @Input('spinnerColor') color = 'var(--main-color)';
  // tslint:disable-next-line:no-input-rename
  @Input('spinnerBdColor') bdColor = 'rgba(255,255,255,0.8)';
  @Input('spinnerSize') size: Size = 'medium';
  @Input('spinnerName') name = 'spinner';

  constructor(
    private templateRef: TemplateRef<SpinnerComponent>,
    private viewContainer: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
    private spinner: NgxSpinnerService
  ) {

  }

  ngOnInit(): void {
    if (this.isLoading) {
      this.spinner.show(this.name);
    }
    const templateView = this.templateRef.createEmbeddedView({
      type: this.type,
      color: this.color,
      bdColor: this.bdColor,
      size: this.size,
      name: this.name,
    });
    const compFactory = this.resolver.resolveComponentFactory(SpinnerComponent);
    const componentRef = this.viewContainer.createComponent(
      compFactory, undefined, this.viewContainer.injector, [templateView.rootNodes]
    );
    componentRef.instance.type = this.type;
    componentRef.instance.color = this.color;
    componentRef.instance.bdColor = this.bdColor;
    componentRef.instance.size = this.size;
    componentRef.instance.name = this.name;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.isLoading.currentValue) {
      setTimeout(() => {
        this.spinner.hide(this.name);
      }, 300);
    } else {
      this.spinner.show(this.name);
    }
  }

}
