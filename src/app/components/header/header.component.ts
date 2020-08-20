import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  public message: object;
  public isSearchFiltersShow: boolean = false;

  @Output() public messageEventHeader: EventEmitter<object> = new EventEmitter<object>();
  @Output() public searchSortEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() public wordFilterEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  public ngOnInit(): void {
  }

  public receiveMessage($event: object): void {
      this.messageEventHeader.emit($event);
  }

  public receiveToggleSearchFilters($event: object): void {
    this.isSearchFiltersShow = !this.isSearchFiltersShow;
}

public searchSort($word: string): void {
  this.searchSortEvent.emit($word);
  console.log($word);
}

public wordFilter($word: string): void {
  this.wordFilterEvent.emit($word);
  console.log($word);
}

}
