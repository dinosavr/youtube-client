import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'youtube-client';
  public color: string = 'green';

  public isSearchResultShow: boolean;

  constructor() { }

  public ngOnInit(): void {
    this.isSearchResultShow = false;
  }

  public receiveMessage($event: object): void {
     if ($event) {
      this.isSearchResultShow = true;
    } else {
      this.isSearchResultShow = false;
    }
  }

}
