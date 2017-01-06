import { Component, HostBinding } from '@angular/core';
import {slideInDownAnimation} from 'app/animations';
import { Skill } from 'app/current-skillset/skills';

@Component({
  selector: 'app-current-skillset',
  animations:[slideInDownAnimation],
  templateUrl: './current-skillset.component.html',
  styleUrls: ['./current-skillset.component.css'],


})
export class CurrentSkillsetComponent {

    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display')   display = 'block';
    @HostBinding('style.position')  position = 'relative';
    
    title = 'This page lists the technologies I have experience with.';
    nonsense = 'no changes found, aye?';

    
     skills: Skill[] = [
                            { url:'app/img/trinity.png' , explanation:'HTML, CSS and Javascript, or atleast the basics in each, are familiar to me.', alt:'Trinity' },
                            { url:'app/img/jquery.png' , explanation:'I have used jQuery in a few school projects. Again, basic knowledge of how it works, nothing too deep, though.', alt:'JQuery' },
                            { url:'app/img/java.png' , explanation:'Java is the language we`ve been using at school. Learning Python and C++ would be cool, too. Haven`t gotten that far yet, though. ', alt:'Java' },
                            { url:'app/img/spring.png' , explanation:'We used the Spring framework to speed up Java development in one of our school projects. You can take a look at it on GitHub: https://github.com/ledeveo/hoptimus', alt:'Spring' },
                            { url:'app/img/mysql.png' , explanation:'MySql is what we`ve been using with our databases. Basic skills in this department.', alt:'MySql' },
                            { url:'app/img/npm.png' , explanation:'I first used npm when I created this site. Don`t know much about it, except that it`s used to handle Javascipt packages and dependencies.', alt:'npm' },
                            { url:'app/img/git.png' , explanation:'I`ve used git for version control. In school projects and personal stuff.', alt:'git' },
                            { url:'app/img/eclipse.png' , explanation:'The only IDE that I`ve used so far. ', alt:'eclipse' }
                            
                            
                          ];


}
