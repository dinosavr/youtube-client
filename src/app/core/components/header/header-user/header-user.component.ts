import { Component, OnInit } from '@angular/core';
import { SettingService } from '../../../services/setting.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.scss']
})
export class HeaderUserComponent implements OnInit {

  constructor(private settingService: SettingService, public router: Router) { }

  public clickUserBtn(): void {
    this.router.navigate([this.settingService.urlLogin]);
  }

  public ngOnInit(): void {
  }

}
