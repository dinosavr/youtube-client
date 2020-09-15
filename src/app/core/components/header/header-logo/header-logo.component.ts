import { Component, OnInit } from '@angular/core';
import { SettingService } from '../../../services/setting.service';

@Component({
  selector: 'app-header-logo',
  templateUrl: './header-logo.component.html',
  styleUrls: ['./header-logo.component.scss']
})
export class HeaderLogoComponent implements OnInit {

  public urlLogo: string;

  constructor(private settingService: SettingService) {
    this.urlLogo = this.settingService.URL_MAIN;
  }

  public ngOnInit(): void {
  }

}
