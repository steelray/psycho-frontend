import { AbstractControl, AsyncValidatorFn, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { EMPTY, Observable, of } from 'rxjs';
import { sizeInMb } from './common.utils';

function mobilePhonePrefixValidator(control: FormControl): any {
  const value = control.value.trim().replace(/\_/g, '');
  if (!value.startsWith('9') && !value.startsWith('33') && !value.startsWith('88') && !value.startsWith('77')) {
    return {
      phone_error: {
        message: 'Некорректный номер телефона'
      }
    };
  }
  return null;
}

export function mobilePhoneValidator(control: FormControl): any {
  if (!control.value) {
    return;
  }
  const error = mobilePhonePrefixValidator(control);
  if (error) {
    return error;
  }
  return phoneValidationFunction(control);
}

export function phoneValidationFunction(formControl: FormControl): any {
  const value = formControl.value;
  if (!value) {
    return null;
  }
  return /^[0-9]{2} [0-9]{3} [0-9]{2} [0-9]{2}$/.test(value) ? null : {
    phone_error: {
      message: 'Некорректно'
    }
  };
}


export function passportValidator(control: FormControl): null | any {
  const value = control.value;
  if (!value) {
    return null;
  }
  return /^[A-Z]{2}\d{7}$/.test(value) ? null : {
    passport: {
      message: 'Wrong passport'
    }
  };
}


export function okedValidatorFunction(control: FormControl): any {
  const value = control.value;
  if (!value) {
    return null;
  }
  return /^[0-9]{5}$/.test(value) ? null : {
    incorrect: {
      message: 'incorrect'
    }
  };
}

export function taxPayerIdValidatorFunction(control: FormControl): any {
  const value = control.value;

  if (!value) {
    return null;
  }
  return /^[0-9]{9}$/.test(value.replace(/\s/g, '')) ? null : {
    incorrect: {
      message: 'incorrect'
    }
  };
}


export function accountNumberValidatorFunction(control: FormControl): any {
  const value = control.value;
  if (!value) {
    return null;
  }
  const escaped = value.replace(/\s/g, '').trim();
  const result = /^\d{20}$/.test(escaped) || /^\d{25}$/.test(escaped) || /^\d{27}$/.test(escaped);

  return result ? null : {
    incorrect: {
      message: 'Wrong number'
    }
  };
}


export function accountNumber20ValidatorFunction(control: FormControl): any {
  const value = control.value;
  if (!value) {
    return null;
  }
  const escaped = value.replace(/\s/g, '').trim();
  const result = /^\d{20}$/.test(escaped);

  return result ? null : {
    incorrect: {
      message: 'SETTLEMENT_ACCOUNT_NUMBER_ERROR20'
    }
  };
}

export function mfoValidatorFunction(control: { value: string }): any {
  const value = control.value;
  if (!value) {
    return null;
  }
  return /^[0-9]{5}$/.test(value) ? null : {
    incorrect: {
      message: 'incorrect'
    }
  };
}

export function fileToBase64(file: File): Observable<string> {
  return new Observable(observer => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const buffer = (e.target as any).result;
      const base64 = btoa(
        new Uint8Array(buffer).reduce((data, byte) => {
          return data + String.fromCharCode(byte);
        }, '')
      );
      observer.next(base64);
    };
    reader.readAsArrayBuffer(file);
  });
}


export function requisiteNameValidatorFunction(control: FormControl): any {
  const value = control.value;
  if (!value) {
    return null;
  }
  return /^[a-zA-Z0-9_\-]+$/.test(value) ? null : {
    incorrect: {
      message: 'incorrect'
    }
  };
}



export function telegramGroupIdValidator(control: FormControl): null | any {
  const value = control.value;
  if (!value) {
    return null;
  }
  return /^\-\d{1,20}/.test(value) ? null : {
    wrongGroupId: {
      message: 'wrong group id'
    }
  };
}

export function amountLimitsValidator(min: number, max: number): any {
  return (control: FormControl) => {
    if (!control || typeof control.value !== 'string') {
      return null;
    }
    const amount = parseFloat(control.value.replace(/\s/g, ''));
    if (isNaN(amount)) {
      return null;
    }
    if (amount > max / 100) {
      return {
        limit_error: {
          message: 'ERRORS.MAX_SUM_ERROR',
          param: max / 100 + ' сум',
        },
      };
    }
    if (amount < min / 100) {
      return {
        limit_error: {
          message: 'ERRORS.MIN_SUM_ERROR',
          param: min / 100 + ' сум',
        },
      };
    }
    return null;
  };
}
