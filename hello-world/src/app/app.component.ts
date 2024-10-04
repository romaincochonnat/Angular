import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImagecomponentComponent } from './imagecomponent/imagecomponent.component';
import { TextcomponentComponent } from './textcomponent/textcomponent.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { EInfoComponent } from './e-info/e-info.component';

import { FormsModule} from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TextcomponentComponent, ImagecomponentComponent, FormComponentComponent, FormsModule, EInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello-world';
}
