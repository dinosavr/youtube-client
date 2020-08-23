import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-search-results-filters',
  templateUrl: './header-search-results-filters.component.html',
  styleUrls: ['./header-search-results-filters.component.scss']
})
export class HeaderSearchResultsFiltersComponent implements OnInit {

  public sortQuery: string;
  public sortDirect: string;
  public wordSearchFilter: string;
  public sortUpResult: string;
  public sortDownResult: string;

  @Output() public applySearchFilterEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() public wordSearchFilterEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.sortQuery = 'date';
    this.sortUpResult = 'up';
    this.sortDownResult = 'down';
    this.sortDirect = this.sortUpResult;
    this.wordSearchFilter = '';
  }

  public ngOnInit(): void {
    console.log(`this.sortQuery: ${this.sortQuery} filter: ### this.sortDirect: ${this.sortDirect}`);
  }

  public applySort(filter: string): void {
    let sortQueryFinal: string;

    console.log(`this.sortQuery: ${this.sortQuery} filter: ${filter} this.sortDirect: ${this.sortDirect}`);

    if (this.sortQuery === filter) {
      this.sortDirect = (this.sortDirect === this.sortDownResult) ? this.sortUpResult : this.sortDownResult;
    }

    this.sortQuery = filter;
    sortQueryFinal = this.sortQuery + '|' + this.sortDirect;

    console.log('sortQueryFinal: ' + sortQueryFinal);

    this.applySearchFilterEvent.emit(sortQueryFinal);
  }

  public applyWordFilter(word: string): void {
    this.wordSearchFilter = word;
    this.wordSearchFilterEvent.emit(this.wordSearchFilter);
  }

}
