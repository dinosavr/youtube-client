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
  public listVideoId: Array<string>;

  constructor(private contentService: ContentService, private searchFilterService: SearchFilterService) { }

  public ngOnInit(): void {
  }

  public ngDoCheck(): void {

    if (this.contentService.response) {
      this.posts = this.contentService.response.items;
      console.log(this.posts);
      this.listVideoId = this.posts.map(item => item.id.videoId);
      console.log(this.listVideoId.join(','));
    }
    this.searchSort = this.searchFilterService.searchResultFilterQuery;
    this.wordFilter = this.searchFilterService.searchResultWordFilter;
  }

}
