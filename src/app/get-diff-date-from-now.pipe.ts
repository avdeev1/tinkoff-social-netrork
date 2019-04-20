import { Pipe, PipeTransform } from '@angular/core';
import * as moment from "moment";

@Pipe({
  name: 'getDiffDateFromNow'
})
export class GetDiffDateFromNowPipe implements PipeTransform {

  transform(date: number): string {
    return moment().diff(moment(date * 1000), 'days').toString();
  }

}
