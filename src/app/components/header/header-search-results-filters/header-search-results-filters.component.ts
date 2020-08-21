import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-search-results-filters',
  templateUrl: './header-search-results-filters.component.html',
  styleUrls: ['./header-search-results-filters.component.scss']
})
export class HeaderSearchResultsFiltersComponent implements OnInit {

  public sortQuery: string = 'date';
  public wordSearchFilter: string = '';
  public sortQueryPrev: string = this.sortQuery;
  public noReversResult: string = 'noReverse';
  public reversResult: string = 'reverse';

  @Output() public applySearchFilterEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() public wordSearchFilterEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  public ngOnInit(): void {

  }

  public applySort(filter: string): void {
    let sortQueryFinal: string;
    this.sortQueryPrev = this.sortQuery;
    this.sortQuery = filter;
    if (this.sortQueryPrev === this.sortQuery) {
      sortQueryFinal = this.sortQuery + '|' + this.reversResult + '|' + Math.random();
    } else {
      sortQueryFinal = this.sortQuery + '|' + this.noReversResult + '|' + Math.random();
    }

    this.applySearchFilterEvent.emit(sortQueryFinal);
  }

  public applyWordFilter(word: string): void {
    this.wordSearchFilter = word;
    this.wordSearchFilterEvent.emit(this.wordSearchFilter);
  }

}
