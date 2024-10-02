import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImagecomponentComponent } from './imagecomponent/imagecomponent.component';
import { TextcomponentComponent } from './textcomponent/textcomponent.component'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TextcomponentComponent, ImagecomponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello-world';
}
