import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(date: number): string {
    return moment(date * 1000).format('DD MMMM YYYY г. в HH:mm');
  }
}
