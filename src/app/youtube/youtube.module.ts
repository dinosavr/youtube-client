import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';

import { SharedModule } from '../shared/shared.module';

import { ContentComponent } from './components/content/content.component';
import { ContentSearchResultsComponent } from './pages/content-search-results/content-search-results.component';
import { ContentSearchResultsItemComponent } from './components/content-search-results-item/content-search-results-item.component';
import { ContentItemDetailComponent } from './pages/content-item-detail/content-item-detail.component';

import { SearchWordFilterPipe } from './pipes/search-word-filter.pipe';
import { SortSearchResultPipe } from './pipes/sort-search-result.pipe';
import { ThousandToKKPipe } from './pipes/thousand-to-kk.pipe';
import { ContentMainComponent } from './pages/content-main/content-main.component';
import { ContentLoginComponent } from './pages/content-login/content-login.component';

@NgModule({
  declarations: [
    ContentComponent,
    ContentSearchResultsComponent,
    ContentSearchResultsItemComponent,
    ContentItemDetailComponent,
    SearchWordFilterPipe,
    SortSearchResultPipe,
    ThousandToKKPipe,
    ContentMainComponent,
    ContentLoginComponent
  ]
  ,
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    ContentComponent,
    ContentSearchResultsComponent,
    ContentSearchResultsItemComponent,
    ContentItemDetailComponent,
  ]
})
export class YoutubeModule { }
