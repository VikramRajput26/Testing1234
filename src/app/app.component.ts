import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyfileComponent } from './myfile/myfile.component';

@Component({
  selector: 'app-root',
  imports: [MyfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-s3';
}
