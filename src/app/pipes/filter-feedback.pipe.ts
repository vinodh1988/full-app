import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterFeedback'
})
export class FilterFeedbackPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
