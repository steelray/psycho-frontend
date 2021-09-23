import { Pipe, PipeTransform } from '@angular/core';
import { IPsychologist } from '@psycho/core';

@Pipe({
  name: 'fio'
})
export class FIOPipe implements PipeTransform {
  transform(value: IPsychologist): string {
    const { first_name, last_name, middle_name } = value;
    return `${last_name} ${first_name} ${middle_name}`;
  }
}