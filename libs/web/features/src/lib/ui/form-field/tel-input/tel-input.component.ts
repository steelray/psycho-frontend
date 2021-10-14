import { Component, ChangeDetectionStrategy, Input, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { BaseFormFieldComponent } from '@psycho/web/core';
import { BehaviorSubject, fromEvent, Observable } from 'rxjs';
import { debounceTime, map, switchMap, takeUntil } from 'rxjs/operators';
import { ICountryPhoneData, countryPhoneData } from './tel-input-data';
import { CountryCode } from 'libphonenumber-js'


@Component({
  selector: 'psycho-tel-input',
  templateUrl: './tel-input.component.html',
  styleUrls: ['./tel-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TelInputComponent extends BaseFormFieldComponent implements AfterViewInit {
  @Input() countries: ICountryPhoneData[] = countryPhoneData;
  @Input() autocompletePlaceholder: string = 'search...';
  @Input() showFlag = true;
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

  @ViewChild('input', { static: false }) input!: ElementRef;


  ngOnInit(): void {
    super.ngOnInit();

    if (this.preferedCountries?.length) {
      this.sortCountries();
    }
  }

  ngAfterViewInit(): void {
    fromEvent(this.input.nativeElement, 'keyup').pipe(
      debounceTime(200),
      map((e: any) => e?.target?.value),
      switchMap(value => this.selectedCountry$.pipe(
        map(country => {
          if (!value) {
            return;
          }
          return `${country?.code}${value}`;
        })
      )),
      takeUntil(this.destroy$)
    ).subscribe(res => {
      const phoneNumber = res ? res.replace(/\D/g, '') : null;
      this.control.setValue(phoneNumber);
    })
  }

  onSelect(e: MatAutocompleteSelectedEvent): void {
    this.selectedCountry$.next(this.getCountryByISO(e.option.value.iso));
  }

  displayWithFn(option: ICountryPhoneData): string {
    return '';
  }

  trackByFn(index: number): number {
    return index;
  }

  private getCountryByISO(iso: string): ICountryPhoneData | undefined {
    const country = this.countries.find(country => country.iso === iso);
    if (country) {
      country.mask = Array.isArray(country.mask) ? country.mask.join('||') : country.mask;
    }
    return country;
  }

  private sortCountries(): void {
    this.countries = this.countries.map(country => {
      const isPrefered = this.preferedCountries.find(pCountry => pCountry.iso === country.iso);
      if (isPrefered) {

        country['order'] = isPrefered.order;
      }
      return country;
    }).sort((a: any, b: any) => a?.order - b?.order);
  }

}
