import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { CoreModule } from './core/core.module';
import { SearchFilterService } from './services/search-filter.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { HeaderSearchFormComponent } from './components/header/header-search-form/header-search-form.component';
import { HeaderUserComponent } from './components/header/header-user/header-user.component';
import { HeaderSearchResultsFiltersComponent } from './components/header/header-search-results-filters/header-search-results-filters.component';
import { ContentSearchResultsComponent } from './components/content/content-search-results/content-search-results.component';
import { ContentSearchResultsItemComponent } from './components/content/content-search-results-item/content-search-results-item.component';
import { ContentItemDetailComponent } from './components/content/content-item-detail/content-item-detail.component';
import { FormRegistrationComponent } from './components/forms/form-registration/form-registration.component';
import { FormLoginComponent } from './components/forms/form-login/form-login.component';
import { ButtonLoginComponent } from './components/buttons/button-login/button-login.component';
import { ButtonSearchComponent } from './components/buttons/button-search/button-search.component';
import { ButtonSearchResultsFiltersComponent } from './components/header/button-search-results-filters/button-search-results-filters.component';
import { ButtonMoreComponent } from './components/buttons/button-more/button-more.component';
import { ButtonViewsComponent } from './components/buttons/button-views/button-views.component';
import { ButtonLikeComponent } from './components/buttons/button-like/button-like.component';
import { ButtonDislikeComponent } from './components/buttons/button-dislike/button-dislike.component';
import { ButtonRepostComponent } from './components/buttons/button-repost/button-repost.component';
import { HeaderLogoComponent } from './components/header/header-logo/header-logo.component';
import { HighlightDirective } from './directives/highlight.directive';
import { SearchWordFilterPipe } from './pipes/search-word-filter.pipe';
import { SortSearchResultPipe } from './pipes/sort-search-result.pipe';
import { ThousandToKKPipe } from './pipes/thousand-to-kk.pipe';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    HeaderSearchFormComponent,
    HeaderUserComponent,
    HeaderSearchResultsFiltersComponent,
    ContentSearchResultsComponent,
    ContentSearchResultsItemComponent,
    ContentItemDetailComponent,
    FormRegistrationComponent,
    FormLoginComponent,
    ButtonLoginComponent,
    ButtonSearchComponent,
    ButtonSearchResultsFiltersComponent,
    ButtonMoreComponent,
    ButtonViewsComponent,
    ButtonLikeComponent,
    ButtonDislikeComponent,
    ButtonRepostComponent,
    HeaderLogoComponent,
    HighlightDirective,
    SearchWordFilterPipe,
    SortSearchResultPipe,
    ThousandToKKPipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule
  ],
  providers: [SearchFilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
