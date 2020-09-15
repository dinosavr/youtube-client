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
    this.router.navigate([this.setting.URL_LOGIN]);
  }

  public ngOnInit(): void {

    if (!localStorage.getItem('login') || localStorage.getItem('login') === 'false') {
      localStorage.setItem('login', 'false');
      this.setting.txtChangeAuthState = this.setting.TXT_LOG_IN_STATE;
    } else {
      this.setting.txtChangeAuthState = this.setting.TXT_LOG_OUT_STATE;
    }
    this.txtLogState = this.setting.txtChangeAuthState;
  }

  public ngDoCheck(): void {
    this.txtLogState = this.setting.txtChangeAuthState;
  }

}
