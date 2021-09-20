import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'isExpired'
})
export class IsExpiredPipe implements PipeTransform {

  transform(date: string | number): boolean {
    return moment(date).diff(moment()) < 0;
  }

}
