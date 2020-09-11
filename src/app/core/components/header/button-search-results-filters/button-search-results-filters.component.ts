import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-search-results-filters',
  templateUrl: './button-search-results-filters.component.html',
  styleUrls: ['./button-search-results-filters.component.scss']
})
export class ButtonSearchResultsFiltersComponent implements OnInit {

  public isSearchFilterToggle: boolean = true;
  @Output() public toggleEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  public ngOnInit(): void {
  }

  public toggleSearchFilters(): void {
     this.toggleEvent.emit(this.isSearchFilterToggle);
  }

}
