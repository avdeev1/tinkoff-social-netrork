import {Pipe, PipeTransform} from '@angular/core';

export const previewTag = '{{preview-for-post}}';

@Pipe({
  name: 'sliceText'
})
export class SliceTextPipe implements PipeTransform {

  transform(value: string): string {
    return value.split(previewTag)[0];
  }
}
