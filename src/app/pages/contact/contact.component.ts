import { Component } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
   contacts:any;

   constructor(public cs:ContactService){
        cs.getContacts().subscribe(
          {
             next: (data:any)=>this.contacts=data,
             error: ()=>this.contacts = [] 
          }
        )
   }

}
