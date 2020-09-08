import { Component, OnInit, Input } from '@angular/core';
import { IResponseItems } from '../../../modules/youtube-response-example/youtube-response-example.module';
import { ContentService } from '../../../core/services/content.service';
import { SearchFilterService } from '../../../services/search-filter.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-content-search-results-item',
  templateUrl: './content-search-results-item.component.html',
  styleUrls: ['./content-search-results-item.component.scss']
})
export class ContentSearchResultsItemComponent implements OnInit {
  public colorBottomBg: string;

  public searchSort: string;
  // @Input() public wordFilter: string;
  public wordFilter: string;

  public msgTest: string;

  public posts: IResponseItems[];
  public testMsg: string;

  constructor(private contentService: ContentService, private searchFilterService: SearchFilterService) { }

  public ngOnInit(): void {
    this.posts = this.contentService.posts;
  }

  public ngDoCheck(): void {
    this.searchSort = this.searchFilterService.searchResultFilterQuery;
    this.wordFilter = this.searchFilterService.searchResultWordFilter;
    console.log(this.searchSort);
    console.log(this.wordFilter);
  }

}
