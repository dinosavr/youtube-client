import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
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
import { ButtonSearchResultsFiltersComponent } from './components/buttons/button-search-results-filters/button-search-results-filters.component';
import { ButtonMoreComponent } from './components/buttons/button-more/button-more.component';
import { ButtonViewsComponent } from './components/buttons/button-views/button-views.component';
import { ButtonLikeComponent } from './components/buttons/button-like/button-like.component';
import { ButtonDislikeComponent } from './components/buttons/button-dislike/button-dislike.component';
import { ButtonRepostComponent } from './components/buttons/button-repost/button-repost.component';
import { HeaderLogoComponent } from './components/header/header-logo/header-logo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
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
    HeaderLogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
