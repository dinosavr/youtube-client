import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentLoginComponent } from '../auth/pages/content-login/content-login.component';

const routes: Routes = [
  {
    path: '',
    component: ContentLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
