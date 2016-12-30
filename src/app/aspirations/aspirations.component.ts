import { Component, HostBinding } from '@angular/core';
import {slideInDownAnimation} from 'app/animations';

@Component({
  selector: 'app-aspirations',
  animations:[slideInDownAnimation],
  template:`
  <div style="margin-bottom:3em;">
  <ngb-carousel>
    <template ngbSlide>
      <img src="{{toddler}}" style="width:100%" alt="Pacifier">
      <div class="carousel-caption">
        <h3>Babysteps</h3>
        <p>As it stands, I'm still learning the very basics of software/web development. Loosing the pacifier is my next goal.</p>
      </div>
    </template>
    <template ngbSlide>
      <img src="{{adolescent}}" style="width:100%" alt="Young gun">
      <div class="carousel-caption">
        <h3>Junior Developer</h3>
        <p>Disinclined to call myself that just yet, though by some standards I might already qualify for this title.</p>
      </div>
    </template>
      <template ngbSlide>
      <img src="{{younggun}}" style="width:100%" alt="Love and marriage">
      <div class="carousel-caption">
        <h3>The ball & chain</h3>
        <p>The ultimate goal. Turn development/programming into a love affair. Taxing, yet so fulfilling.</p>
      </div>
    </template>
  </ngb-carousel>
  </div>

      
  `,
  styleUrls: ['./aspirations.component.css']
})
export class AspirationsComponent  {

    toddler = '/app/img/tutti.jpg';
    adolescent = '/app/img/mcjoonas.jpg';
    younggun = '/app/img/wedded.jpg';   
    
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display')   display = 'block';
    @HostBinding('style.position')  position = 'relative';
}
