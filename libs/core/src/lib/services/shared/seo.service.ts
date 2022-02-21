import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { INameValue, ISeo } from '../../interfaces';
import { ApiService } from '../api/api.service';
import { WindowService } from '../shared/window.service';
@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(
    public http: HttpClient,
    private titleService: Title,
    private metaService: Meta,
    private router: Router,
    private window: WindowService,
    private api: ApiService
  ) {
  }

  getSeo(url: string | null = null): Observable<ISeo> {
    if (!url) {
      url = this.router.url;
    }
    return this.api.get<ISeo>(`seo?url=${url}`).pipe(
      tap((seo) => this.registerMetaTags(seo))
    );
  }

  private registerMetaTags(seo: ISeo): void {
    this.clearMetaTags();
    if (!seo) {
      return;
    }
    this.titleService.setTitle(seo.title);
    const preparedItems = this.prepareItems(seo);
    this.registerStandartMetaTags(preparedItems);
    this.registerOpenGraphMetaTags(preparedItems);
  }

  private registerStandartMetaTags(items: INameValue[]): void {
    this.registerItems(items.filter((item) => item.name !== 'title'));
  }

  private registerOpenGraphMetaTags(items: INameValue[]): void {
    items = items
      .filter((item) => item.name !== 'robots')
      .map((item) => ({
        name: `og:${item.name}`,
        value: item.value,
      }));

    const additionItems: INameValue[] = [
      {
        name: 'og:url',
        value: this.window?.location?.href,
      },
      {
        name: 'og:site_name',
        value: 'PsychologyCorp',
      },
    ];

    items = [...items, ...additionItems];

    this.registerItems(items, 'og');
  }

  private registerItems(
    items: INameValue[],
    type: 'og' | 'twitter' | 'default' = 'default'
  ): void {
    items.forEach((item) => {
      if (item.value) {
        switch (type) {
          case 'og':
            this.metaService.updateTag({
              property: item.name,
              content: item.value,
            });
            break;
          default:
            this.metaService.updateTag({
              name: item.name,
              content: item.value,
            });
            break;
        }
      } else {
        if (type === 'og') {
          this.metaService.removeTag(`property="${item.name}"`);
        } else {
          this.metaService.removeTag(item.name);
        }
      }
    });
  }

  private prepareItems(seo: any): INameValue[] {
    const seoClone = { ...seo };
    delete seoClone.follow;
    delete seoClone.index;

    const res = Object.keys(seoClone).map((key) => ({
      name: key,
      value: seoClone[key],
    }));
    res.push({
      name: 'robots',
      value: [
        {
          name: 'noindex',
          value: !seo.index,
        },
        {
          name: 'nofollow',
          value: !seo.follow,
        },
      ]
        .filter((item) => item.value)
        .map((item) => item.name)
        .join(','),
    });

    return res;
  }

  private clearMetaTags(): void {
    this.titleService.setTitle('');
    const tagNames = [
      'keywords',
      'description',
      'image',
      'robotos',
      'author',
      'title',
      'site_name',
      'url',
    ];

    tagNames.forEach((name) => {
      this.metaService.removeTag(name);
      this.metaService.removeTag(`property="og:${name}"`);
    });
  }
}
