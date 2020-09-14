import { IResponseItemsVideo } from './../../models/youtube-response-example/youtube-response-example.module';
import { Component, OnInit } from '@angular/core';
import { IResponse, IResponseItems } from '../../models/youtube-response-example/youtube-response-example.module';
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
  public posts: IResponseItemsVideo[];

  // tslint:disable-next-line:no-any
  public error: any;
  public headers: string[];
  public response: IResponse;
  public listVideoId: Array<string>;

  constructor(private contentService: ContentService, private searchFilterService: SearchFilterService) { }

  public ngOnInit(): void {
  }

  public ngDoCheck(): void {

    if (this.contentService.response2) {
      this.posts = this.contentService.response2.items;
    }
    this.searchSort = this.searchFilterService.searchResultFilterQuery;
    this.wordFilter = this.searchFilterService.searchResultWordFilter;
  }

}
