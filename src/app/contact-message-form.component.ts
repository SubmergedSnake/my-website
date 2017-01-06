import { Component } from '@angular/core';
import { ContactMessage }    from './contactmessage';
@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html'
})
export class ContactMessageFormComponent {
  model = new ContactMessage('','','');
  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
