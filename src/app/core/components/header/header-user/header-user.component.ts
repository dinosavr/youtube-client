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

  constructor(private settingService: SettingService, public router: Router) { }

  public clickUserBtn(): void {
    this.router.navigate([this.settingService.urlLogin]);
  }

  public ngOnInit(): void {

    if (!localStorage.getItem('login') || localStorage.getItem('login') === 'false') {
      localStorage.setItem('login', 'false');
      this.settingService.txtChangeAuthState = this.settingService.txtLogInState;
    } else {
      this.settingService.txtChangeAuthState = this.settingService.txtLogOutState;
    }
    this.txtLogState = this.settingService.txtChangeAuthState;
  }

  public ngDoCheck(): void {
    this.txtLogState = this.settingService.txtChangeAuthState;
  }

}
