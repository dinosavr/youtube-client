import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from '../app-routing.module';

import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './components/header/header.component';
import { HeaderSearchFormComponent } from './components/header/header-search-form/header-search-form.component';
import { HeaderUserComponent } from './components/header/header-user/header-user.component';
import { HeaderSearchResultsFiltersComponent } from './components/header/header-search-results-filters/header-search-results-filters.component';
import { ButtonSearchResultsFiltersComponent } from './components/header/button-search-results-filters/button-search-results-filters.component';
import { HeaderLogoComponent } from './components/header/header-logo/header-logo.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentPage404Component } from './pages/content-page404/content-page404.component';

import { SettingService } from './services/setting.service';
import { ContentService } from './services/content.service';
import { SearchFilterService } from './services/search-filter.service';
import { AuthService } from './../auth/services/auth.service';
import { YoutubeInterceptor } from './interceptor/youtube.interceptor';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderSearchFormComponent,
    HeaderUserComponent,
    HeaderSearchResultsFiltersComponent,
    ButtonSearchResultsFiltersComponent,
    HeaderLogoComponent,
    FooterComponent,
    ContentPage404Component,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [SettingService, ContentService, SearchFilterService, AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: YoutubeInterceptor, multi: true },
  ],
  exports: [
    HeaderComponent,
    AppRoutingModule,
    SharedModule
  ],
})
export class CoreModule { }
