import { Component } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedback.service';
import { FeedbackComponent } from './feedback/feedback.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  feedbacks:any; 
  constructor(public fs:FeedbackService){
     fs.getFeedbacks().subscribe(
          {
            next:(data:any) => this.feedbacks = data,
            error:()=>this.feedbacks = [] 
          }
     )
   }
}
