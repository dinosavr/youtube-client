import { Injectable } from '@angular/core';

@Injectable()
export class SettingService {

  public readonly baseAppUrl: string = 'http://localhost:4200/';
  public readonly authorApp: string = 'Sidorov Alexandr';
  public readonly urlMain: string = '/';
  public readonly urlLogin: string = 'login';

  public txtChangeAuthState: string = '';
  public readonly txtLogInState: string = 'Login';
  public readonly txtLogOutState: string = 'Logout';
}
