import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isSearchResultShow: boolean;
  public searchSortQuery: string;
  public wordFilter: string;

  constructor() {
    this.isSearchResultShow = false;
  }

  public ngOnInit(): void { }

  public receiveMessage($event: object): void {
    if ($event) {
      this.isSearchResultShow = true;
    } else {
      this.isSearchResultShow = false;
    }
  }

}
