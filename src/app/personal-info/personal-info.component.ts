import { Component, HostBinding } from '@angular/core';
import {slideInDownAnimation} from 'app/animations';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
  animations:[slideInDownAnimation]

})
export class PersonalInfoComponent  {

    winter = 'assets/video/winter.mp4';
    field = 'assets/img/field.jpg';
    
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display')   display = 'block';
    @HostBinding('style.position')  position = 'relative';

}
