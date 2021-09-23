import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'datesDiff'
})
export class DatesDiffPipe implements PipeTransform {


  transform(date: number, diffDate?: number, unit: 'years' | 'months' | 'days' = 'years'): number {
    if (!diffDate) {
      diffDate = new Date().getTime();
    }
    return moment(diffDate).diff(date, unit);
  }


}