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
  public posts: IResponseItems[];

  // tslint:disable-next-line:no-any
  public error: any;
  public headers: string[];
  public response: IResponse;

  constructor(private contentService: ContentService, private searchFilterService: SearchFilterService) { }

  public ngOnInit(): void {
    // this.posts = this.contentService.posts;
  }

  public ngDoCheck(): void {
    // console.log(this.response);

    if (this.response) { this.posts = this.response.items; }
    this.searchSort = this.searchFilterService.searchResultFilterQuery;
    this.wordFilter = this.searchFilterService.searchResultWordFilter;
  }

  public showResponse(): void {
    this.contentService.getYoutubeVideoList()
      .subscribe((response: IResponse) => this.response = {
        kind: response.kind,
        etag: response.etag,
        pageInfo: response.pageInfo,
        items: response.items,
      });
  }
}
