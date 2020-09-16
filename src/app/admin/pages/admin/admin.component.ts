import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SettingService } from '../../../core/services/setting.service';
import { ContentService } from '../../../core/services/content.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})


export class AdminComponent implements OnInit {

  constructor(
    private setting: SettingService,
    public router: Router
  ) { }

  public ngOnInit(): void {
  }

  public onSubmit(f: NgForm): void {
     console.log(f);
  }

}
