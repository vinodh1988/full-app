import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  feedbackForm:any;
  types:string[]=["Branding and Communication","Inbound & Content Marketing","Film & Webinar","Digital Marketing","ECommerce & Websites",
  "Market Analysis"]
    constructor(private hs:FeedbackService,private fb:FormBuilder) {
      this.feedbackForm= this.fb.group({
        name:['',[Validators.required,Validators.minLength(3)]],
        message:['',[Validators.required,Validators.minLength(15)]],
        email:['',[Validators.required, Validators.pattern(
          "^[A-Za-z][A-Za-z_\.0-9]+@[A-Za-z]+[\.][A-Za-z]{2,5}$")]],
          
        type:['Branding and Communication']
      });
     }
  
    ngOnInit(): void {
    }
  
    saveFeedback(){
  
      let token=localStorage.getItem('token');
      var temp:any={
        id: Math.round(Math.random()*10000),
        name: this.feedbackForm.value.name,
        email: this.feedbackForm.value.email,
        type:this.feedbackForm.value.type,
        message:this.feedbackForm.value.message
      
      }
      this.hs.postFeedback(temp).subscribe(
       { 
        next: (data:any)=>{
          alert('Your Feedback is saved')
          location.reload();
        },
        error:(error:any)=>alert('Not saved ---some Error')
      }
  
      )
  
    }
}
