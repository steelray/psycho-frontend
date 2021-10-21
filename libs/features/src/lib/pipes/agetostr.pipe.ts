import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agetostr'
})
export class AgeTostrPipe implements PipeTransform {

  transform(age: number): string {
    let txt;
    let count = age % 100;
    if (count >= 5 && count <= 20) {
      txt = 'лет';
    } else {
      count = count % 10;
      if (count == 1) {
        txt = 'год';
      } else if (count >= 2 && count <= 4) {
        txt = 'года';
      } else {
        txt = 'лет';
      }
    }
    return age + " " + txt;
  }

}