import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { IntroComponent } from './Components/intro/intro.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { FooterComponent } from './Components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, IntroComponent, CoursesComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'democomponents';
}
