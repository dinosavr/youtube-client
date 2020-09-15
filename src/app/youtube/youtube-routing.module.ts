import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentSearchResultsComponent } from '../youtube/pages/content-search-results/content-search-results.component';
import { ContentItemDetailComponent } from '../youtube/pages/content-item-detail/content-item-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ContentSearchResultsComponent
  },
  {
    path: 'video/:id',
    component: ContentItemDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YoutubeRoutingModule { }
