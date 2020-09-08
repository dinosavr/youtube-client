import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { ContentComponent } from './components/content/content.component';
import { ContentSearchResultsComponent } from './components/content/content-search-results/content-search-results.component';
import { ContentSearchResultsItemComponent } from './components/content/content-search-results-item/content-search-results-item.component';
import { ContentItemDetailComponent } from './components/content/content-item-detail/content-item-detail.component';

import { SearchWordFilterPipe } from './pipes/search-word-filter.pipe';
import { SortSearchResultPipe } from './pipes/sort-search-result.pipe';
import { ThousandToKKPipe } from './pipes/thousand-to-kk.pipe';

@NgModule({
  declarations: [
    ContentComponent,
    ContentSearchResultsComponent,
    ContentSearchResultsItemComponent,
    ContentItemDetailComponent,
    SearchWordFilterPipe,
    SortSearchResultPipe,
    ThousandToKKPipe
  ]
  ,
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ContentComponent,
    ContentSearchResultsComponent,
    ContentSearchResultsItemComponent,
    ContentItemDetailComponent,
  ]
})
export class YoutubeModule { }
