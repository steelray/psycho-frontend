import { Component, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { IPostCategory, ISelectOption } from '@psycho/core';
@Component({
  selector: 'psycho-blog-header',
  templateUrl: './blog-header.component.html',
  styleUrls: ['./blog-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogHeaderComponent implements OnChanges {
  @Input() categories: IPostCategory[] = [];
  categoriesOptions!: ISelectOption[];
  constructor(
    private readonly router: Router,
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.categories?.currentValue?.length) {
      const urlArr = this.router.url.split('/');
      const urlLastParam = urlArr[urlArr.length - 1];

      this.categoriesOptions = this.categories?.map(category => ({
        value: category.slug,
        title: category.title,
        isSelected: category?.slug === urlLastParam
      }));

      this.categoriesOptions = [...[{
        value: '/',
        title: 'Все рубрики',
        isSelected: !this.categoriesOptions.find(option => option.isSelected)
      }], ...this.categoriesOptions];
    }
  }

  onCategorySelect(value: string): void {
    const route = ['/blog'];
    if (value && value !== '/') {
      route.push(value);
    }
    this.router.navigate(route);
  }

}
