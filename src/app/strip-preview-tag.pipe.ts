import { Pipe, PipeTransform } from '@angular/core';
import {previewTag} from './slice-text.pipe';

@Pipe({
  name: 'stripPreviewTag'
})
export class StripPreviewTagPipe implements PipeTransform {

  transform(value: string): string {
   return value.replace(new RegExp(previewTag, 'g'), '');
  }

}
