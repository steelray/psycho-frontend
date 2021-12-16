import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PsychologistComponent } from './container/psychologist.component';

const routes: Routes = [
  {
    path: '',
    component: PsychologistComponent,
    children: [
      // {
      //   path: 'consultations',
      //   loadChildren: () => import('./shell/psychologist-questions/psychologist-questions.module').then(m => m.PsychologistQuestionsModule)
      // },
      {
        path: 'consultations',
        loadChildren: () => import('../shared/pages/consultations/consultations.module').then(m => m.ConsultationsModule)
      },
      {
        path: 'set-schedule',
        loadChildren: () => import('./shell/psychologist-set-schedule/psychologist-set-schedule.module').then(m => m.PsychologistSetScheduleModule)
      },
      {
        path: 'finances',
        loadChildren: () => import('./shell/psychologist-finances/psychologist-finances.module').then(m => m.PsychologistFinancesModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./shell/psychologist-profile/psychologist-profile.module').then(m => m.PsychologistProfileModule)
      },
      {
        path: 'support',
        loadChildren: () => import('../shared/pages/support/support.module').then(m => m.SupportModule)
      },
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PsychologistRoutingModule { }
