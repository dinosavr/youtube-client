import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { SearchFilterService } from './services/search-filter.service';

import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { ContentSearchResultsComponent } from './components/content/content-search-results/content-search-results.component';
import { ContentSearchResultsItemComponent } from './components/content/content-search-results-item/content-search-results-item.component';
import { ContentItemDetailComponent } from './components/content/content-item-detail/content-item-detail.component';
import { FormRegistrationComponent } from './components/forms/form-registration/form-registration.component';
import { FormLoginComponent } from './components/forms/form-login/form-login.component';
import { ButtonLoginComponent } from './components/buttons/button-login/button-login.component';
import { ButtonSearchComponent } from './components/buttons/button-search/button-search.component';
import { ButtonMoreComponent } from './components/buttons/button-more/button-more.component';
import { ButtonViewsComponent } from './components/buttons/button-views/button-views.component';
import { ButtonLikeComponent } from './components/buttons/button-like/button-like.component';
import { ButtonDislikeComponent } from './components/buttons/button-dislike/button-dislike.component';
import { ButtonRepostComponent } from './components/buttons/button-repost/button-repost.component';
import { SearchWordFilterPipe } from './pipes/search-word-filter.pipe';
import { SortSearchResultPipe } from './pipes/sort-search-result.pipe';
import { ThousandToKKPipe } from './pipes/thousand-to-kk.pipe';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ContentSearchResultsComponent,
    ContentSearchResultsItemComponent,
    ContentItemDetailComponent,
    FormRegistrationComponent,
    FormLoginComponent,
    ButtonLoginComponent,
    ButtonSearchComponent,
    ButtonMoreComponent,
    ButtonViewsComponent,
    ButtonLikeComponent,
    ButtonDislikeComponent,
    ButtonRepostComponent,
    SearchWordFilterPipe,
    SortSearchResultPipe,
    ThousandToKKPipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule
  ],
  providers: [SearchFilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
