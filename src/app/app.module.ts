import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { HeaderSearchFormComponent } from './components/header-search-form/header-search-form.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { HeaderSearchResultsFiltersComponent } from './components/header-search-results-filters/header-search-results-filters.component';
import { ContentSearchResultsComponent } from './components/content-search-results/content-search-results.component';
import { ContentSearchResultsItemComponent } from './components/content-search-results-item/content-search-results-item.component';
import { ContentItemDetailComponent } from './components/content-item-detail/content-item-detail.component';
import { FormRegistrationComponent } from './components/forms/form-registration/form-registration.component';
import { FormLoginComponent } from './components/forms/form-login/form-login.component';
import { ButtonLoginComponent } from './components/buttons/button-login/button-login.component';
import { ButtonSearchComponent } from './components/buttons/button-search/button-search.component';
import { ButtonSearchResultsFiltersComponent } from './components/buttons/button-search-results-filters/button-search-results-filters.component';

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
    ButtonSearchResultsFiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
