import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'youtube-client';
  public color: string = 'green';
  public isSearchResultShowDefault: boolean = false;
  public searchSortDefault: string = 'date';
  public wordFilterDefault: string = '';

  public isSearchResultShow: boolean;
  public searchSort: string;
  public wordFilter: string;

  constructor() { }

  public ngOnInit(): void {
    this.isSearchResultShow = this.isSearchResultShowDefault;
    this.searchSort = this.searchSortDefault;
    this.wordFilter = this.wordFilterDefault;
  }

  public receiveMessage($event: object): void {
     if ($event) {
      this.isSearchResultShow = true;
    } else {
      this.isSearchResultShow = false;
    }
  }

  public receiveSort($event: string): void {
    console.log('Sort was received in app');
    console.log($event);
    this.searchSort = $event;
 }

 public receiveWordFilter($word: string): void {
  console.log('Word was received in app');
  console.log($word);
  this.wordFilter = $word;
  // this.searchSort = $event;
}

}
