import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';

import { SharedModule } from '../shared/shared.module';

import { ContentSearchResultsComponent } from './pages/content-search-results/content-search-results.component';
import { ContentSearchResultsItemComponent } from './components/content-search-results-item/content-search-results-item.component';
import { ContentItemDetailComponent } from './pages/content-item-detail/content-item-detail.component';

import { SearchWordFilterPipe } from './pipes/search-word-filter.pipe';
import { SortSearchResultPipe } from './pipes/sort-search-result.pipe';
import { ThousandToKKPipe } from './pipes/thousand-to-kk.pipe';

@NgModule({
  declarations: [
    ContentSearchResultsComponent,
    ContentSearchResultsItemComponent,
    ContentItemDetailComponent,
    SearchWordFilterPipe,
    SortSearchResultPipe,
    ThousandToKKPipe,
  ]
  ,
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    ContentSearchResultsComponent,
    ContentSearchResultsItemComponent,
    ContentItemDetailComponent,
  ]
})
export class YoutubeModule { }
