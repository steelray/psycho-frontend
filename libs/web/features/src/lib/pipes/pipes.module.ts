import { NgModule } from '@angular/core';
import { ControlErrorsPipe } from './control-errors.pipe';
import { IsExpiredPipe } from './is-expired.pipe';
import { LocalizedDatePipe } from './localized-date.pipe';
import { PhonePipe } from './phone.pipe';
import { PlainTextPipe } from './plain-text.pipe';
import { SafePipe } from './safe.pipe';

const PIPES = [
  PlainTextPipe,
  SafePipe,
  ControlErrorsPipe,
  IsExpiredPipe,
  PhonePipe,
  LocalizedDatePipe,
];

@NgModule({
  declarations: PIPES,
  exports: PIPES
})
export class PipesModule { }