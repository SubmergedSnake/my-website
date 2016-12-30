import { Component, HostBinding } from '@angular/core';
import {slideInDownAnimation} from 'app/animations';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
  animations:[slideInDownAnimation]

})
export class PersonalInfoComponent  {

    myImageUrl = '/app/img/myImageBur.jpg';
    testRun = 'app/video/testrun2.mp4';
    
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display')   display = 'block';
    @HostBinding('style.position')  position = 'relative';

}
