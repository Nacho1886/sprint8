import { Component } from '@angular/core';
import { Observable, fromEvent, interval, map, startWith } from 'rxjs';
import { AuthService } from './auth/services/auth.service';
import { User } from './auth/interfaces/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sprint8';

}
