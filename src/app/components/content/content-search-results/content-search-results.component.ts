import { Component, OnInit, Output, Input } from '@angular/core';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-content-search-results',
  templateUrl: './content-search-results.component.html',
  styleUrls: ['./content-search-results.component.scss']
})
export class ContentSearchResultsComponent implements OnInit {

  @Input() public isSearchResultShow: boolean;

  constructor() { }

  public ngOnInit(): void {
  }

}
