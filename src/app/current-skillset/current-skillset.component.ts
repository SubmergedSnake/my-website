import { Component, HostBinding } from '@angular/core';
import {slideInDownAnimation} from 'app/animations';

@Component({
  selector: 'app-current-skillset',
  animations:[slideInDownAnimation],
  templateUrl: './current-skillset.component.html',
  styleUrls: ['./current-skillset.component.css']
})
export class CurrentSkillsetComponent {

    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display')   display = 'block';
    @HostBinding('style.position')  position = 'relative';

}
