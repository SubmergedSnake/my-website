import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { ModalModule } from 'ng2-bootstrap/modal';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { AspirationsComponent } from './aspirations/aspirations.component';
import { CurrentSkillsetComponent } from './current-skillset/current-skillset.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { DropdownComponent} from './dropdown.component';
import { ContactComponent } from './contact/contact.component';
import { ContactMessageFormComponent } from './contact-message-form.component';

const routes: Routes = [
 { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome',  component: WelcomeComponent },
  { path: 'personal-info',  component: PersonalInfoComponent },
  { path: 'aspirations',  component: AspirationsComponent },
  { path: 'current-skillset',  component: CurrentSkillsetComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PersonalInfoComponent,
    AspirationsComponent,
    CurrentSkillsetComponent,
    MyComponentComponent,
    DropdownComponent,
    ContactComponent,
    ContactMessageFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true }),
    NgbModule.forRoot(),
    DropdownModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
