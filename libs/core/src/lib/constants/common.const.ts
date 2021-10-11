import { MatDateFormats } from '@angular/material/core';

export const pagableDataDefaultLimit = 20;
export const pagableDataDefaultSkip = 0;
export const pageableDataDefaultPaginationOptions = {
  limit: 20,
  skip: 0
};

export const listOfSpecChars = [
  '~',
  '`',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '-',
  '_',
  '+',
  '=',
  '{',
  '}',
  '[',
  ']',
  '|',
  '\\',
  '/',
  ':',
  ';',
  '"',
  '\'',
  '<',
  '>',
  ',',
  '.',
  '?',
];

export const TASHKENT_CENTER = {
  lat: 41.311227,
  lng: 69.279691,
};

export const imageAllowedTypes = ['jpeg', 'jpg', 'png'];
export const imageMaxSize = 3; // mb
export const imageMinDimensions = [512, 512]; // (width, height) px


export const telegramValidator: any = {
  required: true,
  regexp: /^\@?[0-9a-z_]{5,32}$/i,
};
export const facebookValidator: any = {
  required: true,
  regexp: /^\@?[0-9a-z\.]{5,100}$/i,
};

export const payUrlPrefix = 'https://checkout.paycom.uz/';

export const CUSTOM_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'DD-MM-YYYY'
  },
  display: {
    dateInput: 'DD-MM-YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  }
};

export const ionPhoneMask = '99 999 99 99';

export const defaultImage = '/assets/img/photo.svg'; // default image for lazy load