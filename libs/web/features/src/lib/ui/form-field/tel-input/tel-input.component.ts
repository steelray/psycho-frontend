import { Component, ChangeDetectionStrategy, Input, ViewChild, AfterViewInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { BaseFormFieldComponent } from '@psycho/web/core';
import { BehaviorSubject, fromEvent, Observable } from 'rxjs';
import { debounceTime, filter, map, startWith, tap } from 'rxjs/operators';
import { ICountryPhoneData, countryPhoneData } from './tel-input-data';
import { parsePhoneNumber, CountryCode } from 'libphonenumber-js'
import { FormControl } from '@angular/forms';


export enum FLAG_SIZE {
  SIZE16 = '16',
  SIZE24 = '24',
  SIZE32 = '32',
  SIZE48 = '48',
  SIZE64 = '64',
}

@Component({
  selector: 'psycho-tel-input',
  templateUrl: './tel-input.component.html',
  styleUrls: ['./tel-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TelInputComponent extends BaseFormFieldComponent {
  readonly flagsApi = 'https://countryflags.io/';

  @Input() countries: ICountryPhoneData[] = countryPhoneData;
  @Input() autocompletePlaceholder: string = 'search...';
  @Input() showFlag = true;
  @Input() flagSize: FLAG_SIZE = FLAG_SIZE.SIZE48;
  @Input() selectedCountryCode: CountryCode = 'RU';
  @Input() preferedCountries: { iso: CountryCode, order: number }[] = [
    {
      iso: 'RU',
      order: 1
    },
    {
      iso: 'UA',
      order: 2
    },
    {
      iso: 'BY',
      order: 3
    },
    {
      iso: 'KZ',
      order: 4
    },
    {
      iso: 'UZ',
      order: 5
    }
  ];
  filteredCountries$!: Observable<ICountryPhoneData[]>;
  selectedCountry$ = new BehaviorSubject<ICountryPhoneData | undefined>(this.getCountryByISO(this.selectedCountryCode));


  ngOnInit(): void {
    super.ngOnInit();

    if (this.preferedCountries?.length) {
      this.sortCountries();
    }
  }

  onKeyUp(e: any): void {
    const value = e.target.value;
  }

  onSelect(e: MatAutocompleteSelectedEvent): void {
    this.selectedCountry$.next(this.getCountryByISO(e.option.value.iso));
  }

  private getCountryByISO(iso: string): ICountryPhoneData | undefined {
    const country = this.countries.find(country => country.iso === iso);
    if (country) {
      country.mask = Array.isArray(country.mask) ? country.mask.join('||') : country.mask;
    }
    return country;
  }

  displayWithFn(option: ICountryPhoneData): string {
    return '';
  }

  trackByFn(index: number): number {
    return index;
  }

  private sortCountries(): void {
    this.countries = this.countries.map(country => {
      const isPrefered = this.preferedCountries.find(pCountry => pCountry.iso === country.iso);
      if (isPrefered) {

        country['order'] = isPrefered.order;
      }
      return country;
    }).sort((a: any, b: any) => a?.order - b?.order);


    console.log(this.countries);

  }

}
