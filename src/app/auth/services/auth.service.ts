import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  public isLogin: boolean = false;

constructor() {
  this.isLogin = (localStorage.getItem('login') === 'true');
 }
}
