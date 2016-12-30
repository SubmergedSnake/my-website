import { Component, OnChanges, Input, 
    trigger, state, animate, transition, style } from '@angular/core';
    
    

@Component({
  selector: 'my-fader',
  animations: [
               trigger('visibilityChanged', [
                 state('true' , style({ opacity: 1 })),
                 state('false', style({ opacity: 0 })),
                 transition('* => *', animate('.5s'))
               ])
               ],
               template: `
               <div [@visibilityChanged]="isVisible" >
               <li><a routerLink="/personal-info"
        routerLinkActive="active">Personal info</a></li>
        </div>
               `,
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent  {

    @Input() isVisible : boolean = true;
  
}
