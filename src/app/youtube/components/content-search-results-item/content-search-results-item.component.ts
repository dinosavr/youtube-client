import { SettingService } from './../../../core/services/setting.service';
import { IResponseItemsVideo } from './../../models/youtube-response-example/youtube-response-example.module';
import { Component, OnInit } from '@angular/core';
import { IResponse } from '../../models/youtube-response-example/youtube-response-example.module';
import { AuthService } from '../../../auth/services/auth.service';
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

  public error: unknown;
  public headers: string[];
  public response: IResponse;
  public listVideoId: Array<string>;

  constructor(
    private auth: AuthService,
    private content: ContentService,
    private setting: SettingService,
    private searchFilterService: SearchFilterService) { }

  public ngOnInit(): void {

    if (this.content.response2) {
      this.posts = this.content.response2.items;
    } else {
      this.content.subscribeYoutubeVideoList(this.setting.YOUTUBE_DEFAULT_QUERY);
    }
  }

  public ngDoCheck(): void {

    if (this.content.response2) {
      this.posts = this.content.response2.items;
    }
    this.searchSort = this.searchFilterService.searchResultFilterQuery;
    this.wordFilter = this.searchFilterService.searchResultWordFilter;
  }

}
