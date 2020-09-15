import { Component } from '@angular/core';
import { AuthService } from '../app/auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private auth: AuthService) {}

  public ngOnInit(): void { }

}
