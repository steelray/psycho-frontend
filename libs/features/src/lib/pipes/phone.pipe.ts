import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'phone' })
export class PhonePipe implements PipeTransform {
  transform(value: string): any {
    if (!value) {
      return value;
    }

    const newValue = [];
    if (value.length === 12 || value.length === 13) {
      if (value.length === 13 && value[0] === '+') {
        newValue.push(value[0]);
        value = value.substr(1);
      }
      for (let i = 0; i < value.length; i++) {
        switch (i) {
          case 3:
          case 5:
          case 8:
          case 10:
            newValue.push(' ');
            break;
        }
        newValue.push(value[i]);
      }
      return newValue.join('');
    } else {
      return value;
    }
  }
}
