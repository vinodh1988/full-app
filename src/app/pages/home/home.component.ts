import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  services:any;  
  constructor(public hs:HomeService){
        hs.getServices().subscribe(
              {
                next: (data:any)=>this.services=data,
                error: ()=>this.services=[]
              }
      )
    }
}
