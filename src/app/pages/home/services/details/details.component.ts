import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  id:number=0;
  record:any;
  constructor(private route:ActivatedRoute,private hs:HomeService) {
     this.route.params.subscribe(params=> {
         this.id=params["id"]
         this.hs.getDetails(this.id).subscribe({
          next:(x:any)=>{this.record=x},
          error:(error:any)=>this.record={title:"",details:[]}
        })

     })
   }
}
