import { Component, OnInit } from '@angular/core';
import { SettingService } from '../../../services/setting.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.scss']
})
export class HeaderUserComponent implements OnInit {

  public txtLogState: string;

  constructor(
    private setting: SettingService,
    public router: Router
    ) { }

  public clickUserBtn(): void {
    this.router.navigate([this.setting.urlLogin]);
  }

  public ngOnInit(): void {

    if (!localStorage.getItem('login') || localStorage.getItem('login') === 'false') {
      localStorage.setItem('login', 'false');
      this.setting.txtChangeAuthState = this.setting.txtLogInState;
    } else {
      this.setting.txtChangeAuthState = this.setting.txtLogOutState;
    }
    this.txtLogState = this.setting.txtChangeAuthState;
  }

  public ngDoCheck(): void {
    this.txtLogState = this.setting.txtChangeAuthState;
  }

}
