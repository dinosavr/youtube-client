import { Component, OnInit } from '@angular/core';
import { SettingService } from '../../services/setting.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public author: string;

  constructor(private settingService: SettingService) { }

  public ngOnInit(): void {
    console.log(this.settingService.authorApp);
    this.author = this.settingService.authorApp;
  }

}
