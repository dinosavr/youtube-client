import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../auth/services/auth.service';
import { SettingService } from '../../../core/services/setting.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-login',
  templateUrl: './content-login.component.html',
  styleUrls: ['./content-login.component.scss']
})
export class ContentLoginComponent implements OnInit {

  private isLogin: boolean;
  public txtLogBtn: string;
  public txtLogInBtn: string = 'Login';
  public txtLogOutBtn: string = 'Logout';

  constructor(private authService: AuthService, private setting: SettingService, public router: Router) { }

  public ngOnInit(): void {

    if (!localStorage.getItem('login')) {
      localStorage.setItem('login', 'false');
      this.txtLogBtn = this.txtLogInBtn;
    } else {
      this.txtLogBtn = this.txtLogOutBtn;
    }
  }

  public onSubmit(f: NgForm): void {
    this.isLogin = (localStorage.getItem('login') === 'true');
    this.isLogin = !this.isLogin;
    if (this.isLogin) {
      localStorage.setItem('login', 'true');
      this.txtLogBtn = this.txtLogOutBtn;
    } else {
      localStorage.setItem('login', 'false');
      this.txtLogBtn = this.txtLogInBtn;
    }
    this.authService.isLogin = this.isLogin;
    if (this.isLogin) { this.router.navigate([this.setting.urlMain]); }
  }

}
