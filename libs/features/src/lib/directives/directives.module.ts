import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerDirective } from './spinner/spinner.directive';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CoreSharedModules } from '@psycho/core';
const DIRECTIVES = [
  SpinnerDirective,
];

const DECLARATIONS = [
  SpinnerComponent
];

@NgModule({
  declarations: [...DECLARATIONS, ...DIRECTIVES],
  exports: DIRECTIVES,
  imports: [CoreSharedModules, NgxSpinnerModule, MatSnackBarModule]
})
export class DirectivesModule { }
