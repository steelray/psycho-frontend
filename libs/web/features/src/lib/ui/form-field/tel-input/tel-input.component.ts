import { Component, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { BaseFormFieldComponent } from '@psycho/web/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICountryPhoneData, countryPhoneData } from './tel-input-data';
import { CountryCode, parsePhoneNumber } from 'libphonenumber-js'
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'psycho-tel-input',
  templateUrl: './tel-input.component.html',
  styleUrls: ['./tel-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TelInputComponent extends BaseFormFieldComponent {
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


  constructor(
    private cdRef: ChangeDetectorRef
  ) {
    super();
  }


  ngOnInit(): void {
    super.ngOnInit();

    this.control.addValidators(this.phoneNumberValidate.bind(this));

    if (this.preferedCountries?.length) {
      this.sortCountries();
    }
  }


  onKeyup(event: any): void {
    const value = event.target?.value;
    if (!value) {
      return;
    }
    this.cdRef.markForCheck();

    const selectedCountry = this.selectedCountry$.getValue();
    const res = `${selectedCountry?.code}${value}`;

    const phoneNumber = res ? res.replace(/\D/g, '') : null;
    console.log([phoneNumber]);


    this.control.setValue(phoneNumber);
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

  private phoneNumberValidate(control: AbstractControl): ValidationErrors | null {
    const country = this.selectedCountry$.getValue();
    if (country && control.value) {
      const iso: any = country?.iso;
      const phoneNumber = parsePhoneNumber(control.value, iso);
      if (!phoneNumber.isValid()) {
        return {
          invalidPhoneNumber: {
            message: 'Invalid Phone Number'
          }
        }
      }
    }
    return null;
  }

}
