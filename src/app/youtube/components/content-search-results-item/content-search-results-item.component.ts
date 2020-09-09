import { Component, OnInit, Input } from '@angular/core';
import { IResponseItems } from '../../models/youtube-response-example/youtube-response-example.module';
import { ContentService } from '../../../core/services/content.service';
import { SearchFilterService } from '../../../core/services/search-filter.service';

@Component({
  selector: 'app-content-search-results-item',
  templateUrl: './content-search-results-item.component.html',
  styleUrls: ['./content-search-results-item.component.scss']
})
export class ContentSearchResultsItemComponent implements OnInit {
  public colorBottomBg: string;
  public searchSort: string;
  public wordFilter: string;
  public posts: IResponseItems[];

  constructor(private contentService: ContentService, private searchFilterService: SearchFilterService) { }

  public ngOnInit(): void {
    this.posts = this.contentService.posts;
  }

  public ngDoCheck(): void {
    this.searchSort = this.searchFilterService.searchResultFilterQuery;
    this.wordFilter = this.searchFilterService.searchResultWordFilter;
  }

}
