import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../auth/services/auth.service';
import { SettingService } from '../../../core/services/setting.service';
import { ContentService } from '../../../core/services/content.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-login',
  templateUrl: './content-login.component.html',
  styleUrls: ['./content-login.component.scss']
})
export class ContentLoginComponent implements OnInit {

  public isLogin: boolean;
  public txtLogBtn: string;

  constructor(
    private auth: AuthService,
    private setting: SettingService,
    public router: Router
  ) { }

  public ngOnInit(): void {
    this.isLogin = (localStorage.getItem('login') === 'true');
    this.auth.isLogin = this.isLogin;
    this.txtLogBtn = this.setting.txtChangeAuthState;
  }

  public ngDoCheck(): void {
    this.isLogin = (localStorage.getItem('login') === 'true');
    this.auth.isLogin = this.isLogin;
    this.txtLogBtn = this.setting.txtChangeAuthState;
  }

  public onSubmit(f: NgForm): void {
    this.isLogin = (localStorage.getItem('login') === 'true');
    this.isLogin = !this.isLogin;
    if (this.isLogin) {
      localStorage.setItem('login', 'true');
      this.setting.txtChangeAuthState = this.setting.TXT_LOG_OUT_STATE;
    } else {
      localStorage.setItem('login', 'false');
      this.setting.txtChangeAuthState = this.setting.TXT_LOG_IN_STATE;
    }
    this.txtLogBtn = this.setting.txtChangeAuthState;
    this.auth.isLogin = this.isLogin;

    if (this.auth.isLogin) {
      this.router.navigate([this.setting.URL_MAIN]);
    }
  }

}
