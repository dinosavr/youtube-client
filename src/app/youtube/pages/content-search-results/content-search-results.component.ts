import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-search-results',
  templateUrl: './content-search-results.component.html',
  styleUrls: ['./content-search-results.component.scss']
})
export class ContentSearchResultsComponent implements OnInit {

  @Input() public isSearchResultShow: boolean;
  @Input() public searchSort: string;
  @Input() public wordFilter: string;

  constructor() { }

  public ngOnInit(): void {
  }

}
