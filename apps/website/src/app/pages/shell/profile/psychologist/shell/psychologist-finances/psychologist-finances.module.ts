import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PsychologistFinancesRoutingModule } from './psychologist-finances-routing.module';
import { PsychologistFinancesComponent } from './container/psychologist-finances.component';
import { CoreSharedModules } from '@psycho/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    PsychologistFinancesComponent
  ],
  imports: [
    CoreSharedModules,
    PsychologistFinancesRoutingModule,
    MatButtonModule,
    MatTableModule
  ]
})
export class PsychologistFinancesModule { }
