import { FormControl, FormGroup } from '@angular/forms';
import { ISelectOption } from '@psycho/core';
import * as moment from 'moment';

export const sizeInMb = (size: number): number => {
  // tslint:disable-next-line:no-magic-numbers
  return size / (1024 * 1024);
};



export function getRouteWithoutParams(url: string): string {
  let res = '';
  const routeArr = url.split('/');
  if (routeArr.length) {
    res = routeArr[routeArr.length - 1].split('?')[0];
  }
  return res;
}

export function cloneArrayOfObjects(array: any[]): any[] {
  return JSON.parse(JSON.stringify(array));
}

export function getFullNumber(phoneNumber: string, prefix: string | null = null): number {
  const trimedNumber = phoneNumber.replace(/ /g, '');
  return +(prefix + trimedNumber);
}


export function compareArrays(arr1: any[], arr2: any[]): boolean {
  let areEqual = false;

  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }

  if (arr1.length !== arr2.length) {
    areEqual = false;
  } else {

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < arr1.length; i++) {
      const value = arr1[i];
      const compareValue = arr2[i];
      if (Array.isArray(value)) {
        areEqual = compareArrays(value, compareValue);
      } else if (value !== compareValue) {
        areEqual = false;
        break;
      } else {
        areEqual = true;
      }
    }

  }

  return areEqual;
}

export const ApiUtils = {
  // tslint:disable-next-line:typedef
  getErrorMsg(e: any, locale = 'ru') {
    if (e.error) {
      e = e.error;
    }
    let message = 'System Error';
    if (e.message) {
      switch (e.message.constructor) {
        case String:
          message = e.message;

          break;
        case Object:
          message = e.message[locale] || 'ERRORS.UNKNOWN_ERROR';
          break;
        default:
          message = 'ERRORS.UNKNOWN_ERROR';
          break;
      }
    } else {
      if (typeof e.constructor === 'string') {
        message = e;
      }
    }
    if (/denie(t|d)/i.test(message)) {
      message = 'ERRORS.ACCESS_DENIET';
    }
    return message;
  },
};


export function base64ToArrayBuffer(base64: string): any {
  const binaryString = window.atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}



export function convertAmount(amount: number, fixed = 2): any {
  amount = amount / 100;
  // tslint:disable-next-line:variable-name
  const is_negative = amount < 0;
  // tslint:disable-next-line:variable-name
  let abs_amount = Math.abs(amount);
  const dimensions = ['K', 'KK', 'KKK', 'KKKK'];
  let dim = -1;

  if (abs_amount >= 1000) {
    while (abs_amount >= 1000) {
      abs_amount = abs_amount / 1000;
      dim++;
    }
  }

  const result = is_negative ? 0 - abs_amount : abs_amount;
  return { value: result.toFixed(fixed), dimension: dimensions[dim] };
}

export function removeEmpty(obj: any): any {
  return Object.entries(obj)
    .filter(([_, v]) => v != null)
    .reduce(
      (acc, [k, v]) => ({ ...acc, [k]: v === Object(v) ? removeEmpty(v) : v }),
      {}
    );
}



export function prepareAmount(amount: any): any {
  return {
    min: parseInt(`${amount.min}`.replace(/\s/g, ''), 10) * 100,
    max: parseInt(`${amount.max}`.replace(/\s/g, ''), 10) * 100,
    round: amount.round
  };
}




export function setValueAndDisable(form: FormGroup, controlName: string | string[], value: any): void {
  let control = null;
  if (Array.isArray(controlName)) {
    control = findControlInGroups(form, controlName);
  } else {
    control = form.get(controlName);
  }
  if (!control) {
    return;
  }
  if (value) {
    control.setValue(value);
    control.disable();
  }
}

export function findControlInGroups(form: FormGroup, controlsName: string[]): FormControl | undefined {
  if (!Array.isArray(controlsName)) {
    return;
  }
  let control: FormControl | undefined = undefined;
  controlsName.forEach((name, index) => {
    const c: any = form.get(name);
    if (c instanceof FormControl) {
      control = c;
    } else if (c instanceof FormGroup) {
      control = findControlInGroups(c, controlsName);
    }
  });
  return control;
}

export function downloadFile(link: string, filename: string): void {
  fetch(link)
    .then(t => {
      t.blob().then((b) => {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(b);
        a.setAttribute('download', filename);
        a.click();
        a.remove();
      }
      );
    });
}

export function printElement(selector: string, cb?: any): void {
  const target = document.querySelector(selector);
  if (target) {
    const printWrap = document.createElement('div');
    printWrap.classList.add('print-wrap');
    const clone: any = target.cloneNode(true);
    printWrap.append(clone);
    document.body.prepend(printWrap);


    setTimeout(() => {
      window.onafterprint = (e) => {
        if (cb && typeof cb === 'function') {
          cb();
        }
        printWrap.remove();
      };
      window.print();
    }, 100);
  }
}

export function simulateAClick(link: string): void {
  let el: any = document.createElement('a');
  el.setAttribute('href', link);
  el.style.display = 'none';
  document.body.appendChild(el);
  el.click();
  try {
    el.parentNode.removeChild(el);
    el = undefined;
  } catch (err: any) {
    console.log(err.message);
  }
}

export function generateYears(start: number, end?: number): number[] {
  if (!end) {
    end = new Date().getFullYear();
  }
  if (end <= start) {
    return [start];
  }

  return new Array(end - start).fill(start).map((k, v) => v + k);
}

export function monthsList(format = 'MMM', locale = 'ru'): string[] {
  return Array.apply(0, Array(12)).map(function (_, i) { return moment().month(i).locale(locale).format(format) });
}


export function monthsOptions(): ISelectOption[] {
  return monthsList().map((m, i) => ({
    value: i,
    title: m
  }));
}

export function yearOptions(): ISelectOption[] {
  return generateYears(new Date().getFullYear(), new Date().getFullYear() + 2).map(y => ({
    value: y,
    title: `${y}`
  }));
}

// default Moscow tz
export function momentWithUTC(date?: any, utc = '+03:00'): moment.Moment {
  return moment(date).utcOffset(utc);
}