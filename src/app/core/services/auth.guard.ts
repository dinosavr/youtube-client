import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SettingService } from './setting.service';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private settingService: SettingService, public auth: AuthService, public router: Router) { }

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (localStorage.getItem('login') !== 'true') {
      this.router.navigate([this.settingService.URL_LOGIN]);
    }
    return (localStorage.getItem('login') === 'true');
  }
}
