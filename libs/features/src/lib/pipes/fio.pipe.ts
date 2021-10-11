import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fio'
})
export class FIOPipe implements PipeTransform {
  transform(value: { first_name?: string, last_name?: string, middle_name?: string }): string {
    const { first_name, last_name, middle_name } = value;
    let res = '';
    if (last_name) {
      res = last_name;
    }

    if (first_name) {
      res = `${res} ${first_name}`;
    }

    if (middle_name) {
      res = `${res} ${middle_name}`;
    }

    return res;
  }
}