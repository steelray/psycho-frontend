import { isPlatformServer } from '@angular/common';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Optional,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { RESPONSE, REQUEST } from '@nguniversal/express-engine/tokens';
import { Request, Response } from 'express';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundComponent implements OnInit {
  constructor(
    @Optional() @Inject(REQUEST) private request: Request,
    @Optional() @Inject(RESPONSE) private response: Response,
    @Inject(PLATFORM_ID) private platformId: any
  ) { }

  ngOnInit(): void {
    if (isPlatformServer(this.platformId)) {
      this.response?.status(404);
    }
  }
}
