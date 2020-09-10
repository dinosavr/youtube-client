import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SettingService } from '../../core/services/setting.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private settingService: SettingService, public router: Router, public auth: AuthService) { }

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log(this.auth.isLogin);
    if (!this.auth.isLogin) {
      this.router.navigate([this.settingService.urlLogin]);
    }
    return this.auth.isLogin;
  }
}
