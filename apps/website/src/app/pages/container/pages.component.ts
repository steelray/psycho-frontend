import { Component, Self } from '@angular/core';
import { IMenuItem } from '@psycho/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Observable } from 'rxjs';
import { PagesFacade } from '../pages.facade';

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  providers: [PagesFacade]
})
export class PagesComponent {
  readonly mainMenu$: Observable<IMenuItem[]> = this.facade.mainMenu$;
  readonly footerMenu$: Observable<IMenuItem[]> = this.facade.footerMenu$;
  readonly linkItems$: Observable<IMenuItem[]> = this.facade.linkItems$;
  readonly userData$: any = this.facade.userData$;
  readonly isHomePage$ = this.facade.isHomePage$;
  readonly isAuthPage$ = this.facade.isAuthPage$;
  readonly contacts$ = this.facade.contacts$;
  readonly isProfilePage$ = this.facade.isProfilePage$;

  constructor(
    @Self() private readonly facade: PagesFacade,
    private readonly deviceService: DeviceDetectorService
  ) {
  }

  onLogout(): void {
    this.facade.logout();
  }

  get isMobile(): boolean {
    return this.deviceService.isMobile();
  }
}