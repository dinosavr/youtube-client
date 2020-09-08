import { Component, OnInit } from '@angular/core';
// import { SearchFilterService } from './services/search-filter.service';
import { SearchFilterService } from '../../../../services/search-filter.service';

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
  public iconSort: string;
  public isIconDate: boolean;
  public isIconCountView: boolean;

  constructor(private searchFilterService: SearchFilterService) {
    this.sortQuery = 'date';
    this.sortUpResult = 'up';
    this.sortDownResult = 'down';
    this.sortDirect = this.sortUpResult;
    this.wordSearchFilter = '';
    this.iconSort = '';
    this.isIconDate = false;
    this.isIconCountView = false;
  }

  public ngOnInit(): void {
  }

  public applySort(filter: string): void {
    let commonPartOfIconName: string;
    commonPartOfIconName = 'arrow_drop_';
    let sortQueryFinal: string;

    if (filter === 'date') { this.isIconDate = true; this.isIconCountView = false; } else {
      this.isIconDate = false; this.isIconCountView = true;
    }

    if (this.sortQuery === filter) {
      this.sortDirect = (this.sortDirect === this.sortDownResult) ? this.sortUpResult : this.sortDownResult;
    }

    this.sortQuery = filter;
    sortQueryFinal = this.sortQuery + '|' + this.sortDirect;

    this.iconSort = commonPartOfIconName + this.sortDirect;

    this.searchFilterService.searchResultFilterQuery = sortQueryFinal;
  }

  public applyWordFilter(word: string): void {
    this.searchFilterService.searchResultWordFilter = word;
  }

}
