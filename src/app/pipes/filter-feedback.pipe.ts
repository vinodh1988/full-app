import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterFeedback'
})
export class FilterFeedbackPipe implements PipeTransform {

  transform(feedbacks: any, type: any): any {
     if(type==="All")
        return feedbacks;
     else {
         return feedbacks.filter((x:any)=>x.type==type)
     }
  }

}
