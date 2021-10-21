import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inArray'
})
export class InArrayPipe implements PipeTransform {

  transform(value: any, array: any[] | null): boolean {
    if (!array) {
      return false;
    }
    console.log(array);

    return !!array.find(i => i === value);
  }

}