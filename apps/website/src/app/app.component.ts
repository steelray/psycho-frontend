import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'psycho-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'website';
  control = new FormControl();
}
