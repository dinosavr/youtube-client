import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-search-results-filters',
  templateUrl: './header-search-results-filters.component.html',
  styleUrls: ['./header-search-results-filters.component.scss']
})
export class HeaderSearchResultsFiltersComponent implements OnInit {

  public sortQuery: string = 'date';
  public wordSearchFilter: string = '';

  @Output() public applySearchFilterEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() public wordSearchFilterEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  public ngOnInit(): void {

  }

  public applySort(filter: string): void {
    this.sortQuery = filter;
    this.applySearchFilterEvent.emit(this.sortQuery);

  }

  public applyWordFilter(word: string): void {
    this.wordSearchFilter = word;
    this.wordSearchFilterEvent.emit(this.wordSearchFilter);
  }

}
