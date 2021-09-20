import { Input, OnInit, TemplateRef, OnChanges, SimpleChanges, Directive } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { defaultValidatorMessages } from '@psycho/core';
import { WithDestroy } from '@psycho/utils';

@Directive()
// tslint:disable-next-line:directive-class-suffix
export abstract class BaseFormFieldComponent extends WithDestroy() implements OnInit, OnChanges {
  @Input() control: FormControl = new FormControl();
  @Input() label!: string;
  @Input() labelHint!: string;
  @Input() placeholder!: string;
  @Input() prefix!: TemplateRef<any>;
  @Input() suffix!: TemplateRef<any>;
  @Input() hint!: string;
  @Input() labelTooltip!: string; // "?" icon
  @Input() labelTooltipCustom!: TemplateRef<any>; // custom tooltipe with custom content
  @Input() value: any; // custom value
  @Input() disabled!: boolean; // custome disabled attribute
  @Input() errorMessageParams!: string[]; // for translate
  @Input() readonly = false;

  ngOnInit(): void {
    if (this.disabled) {
      this.control.disable();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.value?.currentValue && changes.value.currentValue !== changes.value.previousValue) {
      this.control.setValue(this.value);
    }
  }

  get errors(): any {
    const errors = [];

    if (this.control.errors && this.control.touched) {
      const errorsKeys = Object.keys(this.control.errors);

      for (const key of errorsKeys) {
        const controlError = this.control.getError(key);
        if (!controlError.message) {
          controlError.message = defaultValidatorMessages[key];
        }
        errors.push({ key, ...controlError });
      }
    }

    return errors;
  }

  get isRequired(): boolean {
    if (typeof this.control.validator === 'function') {
      const validator = this.control.validator({} as AbstractControl);
      if (validator && validator.required) {
        return true;
      }
    }
    return false;
  }
}
