import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// all common modules for all the projects in the workspace
@NgModule({
  exports: [CommonModule, RouterModule]
})
export class CoreSharedModules { }