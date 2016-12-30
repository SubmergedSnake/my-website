import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

    lorem = `This is my personal portfolio. Content-wise, it is very poor. 
        Nevertheless, as it is built with Angular 2, it serves as a
        testament to my dedication to learn new things and improve
        upon my professional capabilities as a developer.`; 
}
