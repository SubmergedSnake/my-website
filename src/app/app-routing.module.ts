import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }   from './app.component';
import { WelcomeComponent} from './welcome/welcome.component';
import { PersonalInfoComponent} from './personal-info/personal-info.component';
import { AspirationsComponent} from './aspirations/aspirations.component';
import { CurrentSkillsetComponent} from './current-skillset/current-skillset.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome',  component: WelcomeComponent },
  { path: 'personal-info',  component: PersonalInfoComponent },
  { path: 'aspirations',  component: AspirationsComponent },
  { path: 'current-skillset',  component: CurrentSkillsetComponent }
  
 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}