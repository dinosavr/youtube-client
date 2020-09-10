import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/services/auth.guard';
import { ContentComponent } from './youtube/components/content/content.component';
import { ContentItemDetailComponent }
  from './youtube/pages/content-item-detail/content-item-detail.component';
import { ContentMainComponent } from './youtube/pages/content-main/content-main.component';
import { ContentLoginComponent } from './auth/pages/content-login/content-login.component';
import { ContentPage404Component } from './core/pages/content-page404/content-page404.component';
import { ContentSearchResultsComponent } from './youtube/pages/content-search-results/content-search-results.component';

const routes: Routes = [
  { path: '', component: ContentSearchResultsComponent },
  { path: 'main',
  component: ContentSearchResultsComponent,
  canActivate: [AuthGuard],
},
  { path: 'login', component: ContentLoginComponent },
  { path: 'list', component: ContentComponent },
  { path: 'det/:id', component: ContentItemDetailComponent },
  { path: '**', component: ContentPage404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
