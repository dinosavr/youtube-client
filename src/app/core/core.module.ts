import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../modules/material/material.module';

import { HeaderComponent } from './components/header/header.component';
import { HeaderSearchFormComponent } from './components/header/header-search-form/header-search-form.component';
import { HeaderUserComponent } from './components/header/header-user/header-user.component';
import { HeaderSearchResultsFiltersComponent } from './components/header/header-search-results-filters/header-search-results-filters.component';
import { ButtonSearchResultsFiltersComponent } from './components/header/button-search-results-filters/button-search-results-filters.component';
import { HeaderLogoComponent } from './components/header/header-logo/header-logo.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentService } from './services/content.service';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderSearchFormComponent,
    HeaderUserComponent,
    HeaderSearchResultsFiltersComponent,
    ButtonSearchResultsFiltersComponent,
    HeaderLogoComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ContentService],
  exports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    HeaderSearchFormComponent,
    HeaderUserComponent,
    HeaderSearchResultsFiltersComponent,
    ButtonSearchResultsFiltersComponent,
    HeaderLogoComponent,
    FooterComponent,
  ],
})
export class CoreModule { }
