import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonLoginComponent } from './components/buttons/button-login/button-login.component';
import { ButtonSearchComponent } from './components/buttons/button-search/button-search.component';
import { ButtonMoreComponent } from './components/buttons/button-more/button-more.component';
import { ButtonViewsComponent } from './components/buttons/button-views/button-views.component';
import { ButtonLikeComponent } from './components/buttons/button-like/button-like.component';
import { ButtonDislikeComponent } from './components/buttons/button-dislike/button-dislike.component';
import { ButtonRepostComponent } from './components/buttons/button-repost/button-repost.component';
import { FormRegistrationComponent } from './components/forms/form-registration/form-registration.component';
import { FormLoginComponent } from './components/forms/form-login/form-login.component';

import { HighlightDirective } from './directives/highlight.directive';

const MATERIAL_COMPONENTS: Array<object> = [
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatBadgeModule
];

@NgModule({
  declarations: [
    ButtonLoginComponent,
    ButtonSearchComponent,
    ButtonMoreComponent,
    ButtonViewsComponent,
    ButtonLikeComponent,
    ButtonDislikeComponent,
    ButtonRepostComponent,
    HighlightDirective,
    FormRegistrationComponent,
    FormLoginComponent,
  ],
  imports: [
    [MATERIAL_COMPONENTS],
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule
  ],
  exports: [
    [MATERIAL_COMPONENTS],
    HighlightDirective,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
