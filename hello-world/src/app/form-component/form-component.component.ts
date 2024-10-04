import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-component',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.css',
})
export class FormComponentComponent {
  submit(login: any) {
    console.log('form submitted', login);
  }
}
