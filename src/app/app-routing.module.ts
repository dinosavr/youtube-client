import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/services/auth.guard';
import { ContentPage404Component } from './core/pages/content-page404/content-page404.component';

const routes: Routes = [
  {
    path: '',
    loadChildren:  () =>
     import ('./youtube/youtube.module' ).then((m) => m.YoutubeModule),
     canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren:  () =>
     import ('./auth/auth.module' ).then((m) => m.AuthModule),
  },
  {
    path: 'video/:id',
    loadChildren:  () =>
     import ('./youtube/youtube.module' ).then((m) => m.YoutubeModule),
     canActivate: [AuthGuard]
  },
  { path: '**', component: ContentPage404Component, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
