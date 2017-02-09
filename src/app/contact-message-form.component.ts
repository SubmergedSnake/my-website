import { Component } from '@angular/core';
import { Http }          from '@angular/http';
import { ContactMessage }    from './contactmessage';
@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html'
})
export class ContactMessageFormComponent {
    
    constructor (private http: Http) {}

  model = new ContactMessage('','','');
  submitted = false;
  
//  onSubmit(value: string): void {
//     
//      this.submitted = true; 
//      console.log('you submitted value: ', value);
//      this.http.post('http://localhost:4200/contact-form-handler.php', value);
 // }
  
  // TODO: Remove this when we're done
 // get diagnostic() { return JSON.stringify(this.model); }
}


