import { Injectable } from '@angular/core';

@Injectable()
export class SettingService {

  public readonly baseAppUrl: string = 'http://localhost:4200/';
  public readonly authorApp: string = 'Sidorov Alexandr';
}
