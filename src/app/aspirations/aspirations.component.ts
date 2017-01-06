import { Component, HostBinding } from '@angular/core';
import {slideInDownAnimation} from 'app/animations';

@Component({
  selector: 'app-aspirations',
  animations:[slideInDownAnimation],
  templateUrl:'./aspirations.component.html',
  styleUrls: ['./aspirations.component.css']
})
export class AspirationsComponent  {

    toddler = 'assets/img/tutti.jpg';
    adolescent = 'assets/img/mcjoonas.jpg';
    younggun = 'assets/img/wedded.jpg';   
    
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display')   display = 'block';
    @HostBinding('style.position')  position = 'relative';
}
