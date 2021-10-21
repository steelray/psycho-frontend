import { NgModule } from '@angular/core';
import { AgeTostrPipe } from './agetostr.pipe';
import { ControlErrorsPipe } from './control-errors.pipe';
import { DatesDiffPipe } from './dates-diff.pipe';
import { FIOPipe } from './fio.pipe';
import { InArrayPipe } from './in-array.pipe';
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
  FIOPipe,
  DatesDiffPipe,
  InArrayPipe,
  AgeTostrPipe
];

@NgModule({
  declarations: PIPES,
  exports: PIPES
})
export class PipesModule { }