import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, NgModule, PLATFORM_ID } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ENVIRONMENTS, IEnvironment } from '@psycho/core';
import { IMatIcon } from '../../interfaces';
import { MATERIAL_ICONS_LIST } from './material-icons-list';

@NgModule({
  exports: [
    MatIconModule
  ]
})
export class MaterialIconCustomizeModule {
  constructor(
    private sanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry,
    @Inject(PLATFORM_ID) private platformId: string,
    @Inject(ENVIRONMENTS) private environment: IEnvironment
  ) {
    const extension = '.svg';
    let path = '';

    if (isPlatformServer(platformId)) {
      path = environment.production ? 'https://psychologycorp.ru/' : 'http://localhost:4200/';
    }

    MATERIAL_ICONS_LIST.forEach((icon: IMatIcon) => {
      const url = sanitizer.bypassSecurityTrustResourceUrl(path + icon.src + icon.name + extension);
      matIconRegistry.addSvgIcon(icon.name, url);
    });
  }
}
