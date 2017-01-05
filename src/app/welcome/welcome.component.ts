import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

    lorem = `This is my personal portfolio. Content-wise, it is very poor. I'm only just
    taking my first steps in the IT industry, and have very little to show for it. 
        Nevertheless, as this site is built with Angular 2 (and Bootstrap), it serves as a
        testament to my dedication to learn new things and improve
        upon my professional capabilities as a developer. Explore these pages to learn more about me,
        what I'm interested in etc. If you have suggestions on how to improve this page, or wish to contact me,
        then...`; 
}
